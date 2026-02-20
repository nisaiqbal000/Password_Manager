const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { encryptVault, decryptVault } = require("./crypto/encryption");

let mainWindow;

// Prevent multiple instances (Enterprise Standard)
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    minWidth: 900,
    minHeight: 600,
    show: false,
    backgroundColor: "#0f172a",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
      webSecurity: true,
      sandbox: true,
      devTools: process.env.NODE_ENV !== "production"
    }
  });

  mainWindow.loadFile("index.html");

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Prevent new window attacks
  mainWindow.webContents.setWindowOpenHandler(() => {
    return { action: "deny" };
  });
}

/* ---------------- IPC HANDLERS ---------------- */

ipcMain.handle("decrypt-vault", async (event, password) => {
  try {
    return await decryptVault(password);
  } catch (error) {
    console.error("Decrypt Error:", error);
    return { error: "Failed to decrypt vault" };
  }
});

ipcMain.handle("encrypt-vault", async (event, password, data) => {
  try {
    await encryptVault(password, data);
    return { success: true };
  } catch (error) {
    console.error("Encrypt Error:", error);
    return { error: "Failed to encrypt vault" };
  }
});

/* ---------------- APP LIFECYCLE ---------------- */

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});