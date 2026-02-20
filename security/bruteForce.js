let attempts = 0;
const MAX_ATTEMPTS = 3;

function recordFailure() {
  attempts++;
  if (attempts >= MAX_ATTEMPTS) {
    alert("Application locked due to multiple failed attempts.");
    window.close();
  }
}

function resetAttempts() {
  attempts = 0;
}

module.exports = { recordFailure, resetAttempts };