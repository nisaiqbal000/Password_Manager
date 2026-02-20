const crypto = require("crypto");
const fs = require("fs");
const { deriveKey } = require("./keyDerivation");

const VAULT_FILE = "vault.enc";

async function encryptVault(password, data) {
  const salt = crypto.randomBytes(16);
  const key = await deriveKey(password, salt);
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(data)),
    cipher.final()
  ]);

  const tag = cipher.getAuthTag();

  fs.writeFileSync(VAULT_FILE, JSON.stringify({
    salt: salt.toString("base64"),
    iv: iv.toString("base64"),
    tag: tag.toString("base64"),
    data: encrypted.toString("base64")
  }));
}

async function decryptVault(password) {
  if (!fs.existsSync(VAULT_FILE)) return {};

  const file = JSON.parse(fs.readFileSync(VAULT_FILE));
  const salt = Buffer.from(file.salt, "base64");
  const key = await deriveKey(password, salt);

  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(file.iv, "base64")
  );

  decipher.setAuthTag(Buffer.from(file.tag, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(file.data, "base64")),
    decipher.final()
  ]);

  return JSON.parse(decrypted.toString());
}

module.exports = { encryptVault, decryptVault };