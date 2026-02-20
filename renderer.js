let vaultData = [];
let masterPassword = null;

const totalCount = document.getElementById("totalCount");

/* ================= UNLOCK ================= */

async function unlockVault() {
  const password = document.getElementById("masterPassword").value.trim();

  if (!password) {
    alert("Enter master password");
    return;
  }

  const result = await window.api.decryptVault(password);

  if (result.error) {
    alert("Wrong password");
    return;
  }

  masterPassword = password;
  vaultData = Array.isArray(result) ? result : [];

  renderVault();
  alert("Vault Unlocked");
}

/* ================= RESET MASTER PASSWORD ================= */

async function resetMasterPassword() {
  if (!masterPassword) {
    alert("Unlock first before resetting");
    return;
  }

  const newPassword = prompt("Enter New Master Password");

  if (!newPassword) return;

  masterPassword = newPassword;
  await window.api.encryptVault(masterPassword, vaultData);

  alert("Master Password Reset Successfully");
}

/* ================= SAVE ================= */

async function saveVault() {
  if (!masterPassword) return;
  await window.api.encryptVault(masterPassword, vaultData);
}

/* ================= ADD ENTRY ================= */

async function addEntry() {
  if (!masterPassword) {
    alert("Unlock vault first");
    return;
  }

  const website = document.getElementById("websiteInput").value.trim();
  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();

  if (!website || !username || !password) {
    alert("Fill all fields");
    return;
  }

  vaultData.push({ website, username, password });

  await saveVault();
  renderVault();

  document.getElementById("websiteInput").value = "";
  document.getElementById("usernameInput").value = "";
  document.getElementById("passwordInput").value = "";
}

/* ================= DELETE ================= */

async function deleteEntry(index) {
  vaultData.splice(index, 1);
  await saveVault();
  renderVault();
}

/* ================= SEARCH ================= */

function searchVault() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = vaultData.filter(entry =>
    entry.website.toLowerCase().includes(query) ||
    entry.username.toLowerCase().includes(query)
  );

  renderVault(filtered);
}

/* ================= RENDER ================= */

function renderVault(data = vaultData) {
  const table = document.getElementById("vaultTable");
  table.innerHTML = "";

  totalCount.textContent = vaultData.length;

  data.forEach((entry, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${entry.website}</td>
      <td>${entry.username}</td>
      <td>${entry.password}</td>
      <td>
        <button onclick="deleteEntry(${index})">Delete</button>
      </td>
    `;

    table.appendChild(row);
  });
}

/* ================= GENERATE PASSWORD ================= */

function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("passwordInput").value = password;
  document.getElementById("generatedPassword").textContent = password;
}

/* ================= NAVIGATION ================= */

function navigate(pageId) {
  document.querySelectorAll(".page").forEach(page =>
    page.classList.remove("active")
  );

  document.getElementById(pageId).classList.add("active");
}