# 🔐 Password Manager

<p align="center">
  <b>Enterprise-Grade Password Manager built with Electron & Node.js</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Electron-Desktop_App-blue?logo=electron" />
  <img src="https://img.shields.io/badge/Encryption-AES--256--GCM-green" />
  <img src="https://img.shields.io/badge/Key_Derivation-Argon2id-red" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
  <img src="https://img.shields.io/badge/Security-Enterprise_Level-black" />
</p>

---

## 🏢 About The Project

**Secure Vault Enterprise** is a high-security desktop password manager designed to protect sensitive credentials using modern cryptographic standards and hardened Electron architecture.

Built with a **security-first mindset**, it ensures:

* Zero plain-text storage
* Hardened IPC communication
* Memory-safe cryptographic handling
* Local encrypted vault storage

It is suitable for:

* 👩‍💻 Developers
* 🏢 Enterprises
* 🔐 Cybersecurity enthusiasts
* 👤 Personal secure usage

---

## 🚀 Core Security Architecture

### 🔐 Encryption Standard

* **AES-256-GCM**
* Authenticated encryption
* Ensures confidentiality + integrity

### 🔑 Key Derivation

* **Argon2id**
* Memory-hard hashing algorithm
* Resistant to GPU & brute-force attacks

### 🛡 Application Hardening

* Context Isolation enabled
* Node.js integration disabled in renderer
* Secure preload bridge
* Controlled IPC communication
* Sandboxed execution environment

---

## ✨ Key Features

✔ AES-256-GCM encrypted vault storage

✔ Argon2id master password protection

✔ Brute-force attack lockout system

✔ Automatic vault locking after inactivity

✔ Clipboard auto-clear protection

✔ Real-time password strength evaluation

✔ Fully local encrypted storage (`vault.enc`)

---

## 🏗 Project Structure

```
secure-password-manager/
│
├── main.js              # Electron main process
├── preload.js           # Secure IPC bridge
│
├── crypto/
│   ├── encryption.js    # AES-256-GCM logic
│   └── keyDerivation.js # Argon2id implementation
│
├── security/
│   └── bruteForce.js    # Lockout protection
│
├── renderer/
│   ├── ui.js            # UI logic
│   └── strength.js      # Password strength checker
│
├── index.html
├── styles.css
├── package.json
└── vault.enc            # Encrypted vault database
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/nisaiqbal000/Password_Manager.git
cd Password_Manager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Application

```bash
npm start
```

---

## 🔐 Security Standards Overview

| Layer                  | Technology           |
| ---------------------- | -------------------- |
| Encryption             | AES-256-GCM          |
| Key Derivation         | Argon2id             |
| Vault Storage          | Encrypted Local File |
| Brute-Force Protection | Lockout System       |
| Inactivity Protection  | Auto-Lock            |
| Renderer Security      | Context Isolation    |

---

## 🧠 Why Secure Vault Enterprise?

Unlike basic password managers, this application:

* Uses memory-hard key derivation (Argon2id)
* Implements authenticated encryption (GCM mode)
* Applies Electron security best practices
* Avoids insecure renderer exposure
* Stores all data locally with full encryption

This makes it suitable for **enterprise-grade security scenarios**.

---

## 📦 Tech Stack

* **Electron**
* **Node.js**
* **Argon2**
* **Node Crypto Module**
* **HTML / CSS / JavaScript**

---

## 🔮 Future Improvements

* Multi-vault support
* Biometric authentication integration
* Encrypted backup export
* Optional encrypted cloud sync
* UI redesign (modern minimal theme)

---

## 👩‍💻 Author

**Nisa Iqbal**
Cybersecurity & Software Development Enthusiast

GitHub:
[https://github.com/nisaiqbal000](https://github.com/nisaiqbal000)

---

## 📜 License

MIT License © 2026 Nisa Iqbal

This project is licensed under the MIT License.

---

## ⭐ Support The Project

If you find this useful:

* ⭐ Star the repository
* 🔐 Promote secure development practices
* 🛠 Contribute improvements

---

<p align="center">
  <b>Secure. Private. Enterprise-Ready.</b> 🔐
</p>


