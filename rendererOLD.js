const vaultTable = document.getElementById("vaultTable");
const totalCount = document.getElementById("totalCount");

let vaultData = [];

function renderVault() {
  vaultTable.innerHTML = "";
  totalCount.textContent = vaultData.length;

  vaultData.forEach((entry, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${entry.website}</td>
      <td>${entry.username}</td>
      <td>
        <button class="action-btn" onclick="deleteEntry(${index})">
          Delete
        </button>
      </td>
    `;

    vaultTable.appendChild(row);
  });
}

function deleteEntry(index) {
  vaultData.splice(index, 1);
  renderVault();
}

// Demo Data
vaultData = [
  { website: "google.com", username: "admin@gmail.com" },
  { website: "github.com", username: "devUser" }
];

renderVault();
function navigate(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("generatedPassword").textContent = password;
}