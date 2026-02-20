document.getElementById("password")?.addEventListener("input", function () {
  const strength = calculateStrength(this.value);
  const fill = document.getElementById("strengthFill");

  fill.style.width = strength + "%";

  if (strength < 40) fill.style.background = "red";
  else if (strength < 70) fill.style.background = "orange";
  else fill.style.background = "green";
});

function calculateStrength(password) {
  let score = 0;
  if (password.length > 8) score += 30;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[0-9]/.test(password)) score += 20;
  if (/[^A-Za-z0-9]/.test(password)) score += 30;
  return score;
}