# Secure Vault Enterprise 🔐

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16-brightgreen)](https://nodejs.org/)
[![Electron](https://img.shields.io/badge/electron-v30.0.0-blue)](https://www.electronjs.org/)

## 📝 Overview

**Secure Vault Enterprise** is an enterprise-level password manager built with **Electron**. It provides a robust and secure environment for managing sensitive credentials using industry-standard security protocols. 

It features **AES-256-GCM encryption**, **Argon2id key derivation**, and **secure IPC** communication, making it suitable for both personal and professional use.

---

## 🏢 Key Features

- **Advanced Encryption:** Uses AES-256-GCM for all stored data.
- **Modern Hashing:** Argon2id key derivation for high-level master password security.
- **Sandboxed Environment:** Context isolation & no Node.js access in the renderer for maximum safety.
- **Brute-Force Protection:** Built-in lockout system to prevent unauthorized access.
- **Auto-Lock:** Automatically locks the vault after periods of inactivity.
- **Privacy First:** Clipboard auto-clear and password strength evaluation.
- **Local Storage:** Vault is encrypted and stored locally in `vault.enc`.

---

## 🏗 Project Structure

```text
secure-password-manager/
│
├── main.js             # Main process
├── preload.js          # Secure bridge (IPC)
├── crypto/             # Encryption & Key logic
│   ├── encryption.js
│   └── keyDerivation.js
├── security/           # Safety measures
│   └── bruteForce.js
├── renderer/           # UI Logic
│   ├── ui.js
│   └── strength.js
├── index.html          # Main UI
├── styles.css          # Styling
├── package.json        # Dependencies
└── vault.enc           # Encrypted Database
