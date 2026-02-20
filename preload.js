const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  decryptVault: (password) => ipcRenderer.invoke("decrypt-vault", password),
  encryptVault: (password, data) =>
    ipcRenderer.invoke("encrypt-vault", password, data)
});