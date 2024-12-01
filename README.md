# File-Shield - File Encryption & Decryption Tool

Project Live Preview: (https://file-shield-xvfi.vercel.app/)

## 🔐 Project Overview

This application provides a secure way to encrypt and decrypt files using a user-specified key. It offers a simple, intuitive interface for protecting sensitive documents and ensuring data privacy.

## ⚠️ IMPORTANT WARNINGS AND DISCLAIMERS

### 🚨 CRITICAL NOTICE

**BY USING THIS APPLICATION, YOU ACKNOWLEDGE AND AGREE TO THE FOLLOWING:**

1. **NO WARRANTY OF DATA INTEGRITY**

   - This application is provided "as is" without any guarantees of data preservation or integrity.
   - We do NOT guarantee:
     - Complete file recovery after encryption/decryption
     - Prevention of data loss
     - Protection against file corruption

2. **POTENTIAL RISKS**

   - File encryption and decryption processes may:
     - Cause partial or complete data loss
     - Result in file corruption
     - Render files unrecoverable

3. **USER RESPONSIBILITY**

   - YOU ARE SOLELY RESPONSIBLE FOR:
     - Maintaining original backups of ALL files
     - Verifying file integrity before and after processing
     - Understanding potential risks
     - Any data loss or damage resulting from application use

4. **ENCRYPTION KEY MANAGEMENT**

   - CRITICAL WARNING:
     - NEVER lose your encryption key
     - Store your encryption key securely
     - Loss of key may result in PERMANENT data inaccessibility

5. **NO LIABILITY**
   - The developers and contributors of this application:
     - ASSUME NO RESPONSIBILITY for any data loss
     - WILL NOT be liable for any damages
     - RECOMMEND professional data protection methods for critical files

**BY PROCEEDING, YOU EXPLICITLY ACCEPT ALL THESE TERMS AND POTENTIAL RISKS**

## ✨ Features

- File Upload
- Encryption of uploaded files
- Decryption of encrypted files
- Secure key management
- User-friendly web interface

## 🚀 Technologies Used

- Frontend: React.js
- Backend: Node.js
- Encryption: Crypto Module (AES-256-CBC)
- File Handling: Multer

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Modern web browser

## 🔧 Installation

### Clone the Repository

```bash
git clone https://github.com/Het-Kotadiya/File-Shield.git
```

### Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## 🖥️ Running the Application

### Start Backend Server

```bash
cd backend
cd src
node ./app.js
```

### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

## 🛡️ Recommended Best Practices

- ALWAYS maintain original file backups
- Test encryption/decryption with non-critical files first
- Use strong, unique encryption keys
- Do not share your encryption key
- Store keys securely
- Recommended key length: 16-32 characters

## 🔒 Encryption Process

1. User uploads a file
2. User provides an encryption/decryption key
3. File is processed using AES encryption
4. Encrypted file is made available for download

## 🔒 Decryption Process

1. User uploads a file previously encrypted file using this tool.
2. User provides an encryption/decryption key
3. File is decrypted
4. Decrypted file is made available for download

## 📸 ScreenShots
![Screenshot 2024-12-01 140334](https://github.com/user-attachments/assets/af630c28-4205-43a9-bd4d-e7a4ae4d6463)
