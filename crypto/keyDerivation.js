const argon2 = require("argon2");

async function deriveKey(password, salt) {
  return await argon2.hash(password, {
    type: argon2.argon2id,
    salt: salt,
    hashLength: 32,
    timeCost: 3,
    memoryCost: 2 ** 16,
    parallelism: 1,
    raw: true
  });
}

module.exports = { deriveKey };