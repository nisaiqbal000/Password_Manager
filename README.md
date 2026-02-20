Got it 👍 — you’re right. The formatting broke because of those extra `id=""` attributes inside code blocks. GitHub README **does NOT support that**, so it ruins the markdown.

Here is a **clean, properly formatted GitHub-ready README.md** — no extra attributes, no broken formatting. Just copy and paste directly.

---

# 🔐 Secure Vault Enterprise

### Enterprise-Grade Password Manager (Electron + Node.js)

Secure Vault Enterprise is a high-security desktop password manager built with **Electron** and **Node.js**, designed to protect sensitive credentials using industry-standard cryptography and enterprise-level security architecture.

It combines **AES-256-GCM encryption**, **Argon2id key derivation**, and secure IPC communication to ensure maximum data protection — suitable for both professional and professional use.

---

## 🏢 Overview

Secure Vault Enterprise provides a secure, sandboxed environment for storing and managing credentials locally. All sensitive data is encrypted before being written to disk, ensuring zero plain-text storage.

The application follows modern security best practices including:

* Context Isolation enabled
* Node Integration disabled
* Secure IPC bridge (preload.js)
* Restricted renderer environment
* Memory-safe cryptographic handling

---

## 🚀 Key Features

### 🔒 Advanced Encryption

All stored data is encrypted using **AES-256-GCM**, providing authenticated encryption with integrity verification.

### 🛡 Modern Key Derivation

Implements **Argon2id**, a memory-hard hashing algorithm resistant to brute-force and GPU attacks.

### 🧱 Sandboxed Architecture

* Context Isolation enabled
* Node.js access disabled in renderer
* Secure preload bridge
* Hardened IPC communication

### 🚫 Brute-Force Protection

Built-in lockout system prevents repeated unauthorized access attempts.

### ⏳ Auto-Lock System

Automatically locks the vault after a period of inactivity.

### 🧹 Privacy-First Features

* Clipboard auto-clear after copying passwords
* Real-time password strength evaluation

### 💾 Local Encrypted Storage

All credentials are encrypted and stored locally in:

```
vault.enc
```

No cloud storage. No external servers. 100% local security.

---

## 🏗 Project Structure

```
secure-password-manager/
│
├── main.js              # Electron main process
├── preload.js           # Secure IPC bridge
│
├── crypto/              # Cryptography logic
│   ├── encryption.js
│   └── keyDerivation.js
│
├── security/            # Security mechanisms
│   └── bruteForce.js
│
├── renderer/            # Frontend logic
│   ├── ui.js
│   └── strength.js
│
├── index.html           # Application UI
├── styles.css           # Styling
├── package.json         # Dependencies
└── vault.enc            # Encrypted vault database
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nisaiqbal000/Password_Manager.git
cd Password_Manager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm start
```

---

## 🔐 Security Standards

| Security Layer         | Technology Used                    |
| ---------------------- | ---------------------------------- |
| Key Derivation         | Argon2id                           |
| Encryption             | AES-256-GCM                        |
| Storage                | Encrypted Local File (`vault.enc`) |
| Brute-Force Protection | Lockout Mechanism                  |
| Inactivity Protection  | Auto-Lock                          |
| Memory Handling        | Secure Memory Practices            |

---

## 🧪 Cryptographic Details

### 🔑 Key Derivation

* Algorithm: **Argon2id**
* Memory-hard & GPU-resistant
* Protects master password against brute-force attacks

### 🔐 Encryption

* Algorithm: **AES-256-GCM**
* Provides:

  * Confidentiality
  * Integrity
  * Authentication

---

## 📦 Dependencies

* **Electron** – Cross-platform desktop framework
* **Argon2** – Secure password hashing
* **Node.js Crypto** – Native cryptographic module

---

## 🎯 Use Cases

* Enterprise credential management
* Local secure password storage
* Developer secure vault solution
* Security-focused desktop applications

---

## 👩‍💻 Author

**Nisa Iqbal**
Cybersecurity & Software Development Enthusiast

GitHub: [https://github.com/nisaiqbal000](https://github.com/nisaiqbal000)

---

## 📜 License

MIT License © 2026 Nisa Iqbal

This project is licensed under the MIT License — feel free to use, modify, and distribute responsibly.

---

## ⭐ Support

If you find this project helpful:

* ⭐ Star the repository
* 🛠 Contribute improvements
* 🔐 Promote secure development practices

---

**Secure. Private. Enterprise-Ready.** 🔐

---

If you want, I can now make a **more premium GitHub-style README** (with badges, shields, professional layout, and better visual hierarchy).
