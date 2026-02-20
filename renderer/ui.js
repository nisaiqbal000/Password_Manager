function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function lockVault() {
  document.getElementById("lockOverlay").classList.remove("hidden");
  document.getElementById("unlockPassword").value = "";
}