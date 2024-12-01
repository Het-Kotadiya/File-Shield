const path = require('path');
const fs = require('fs-extra');
const { encrypt, decrypt } = require('../utils/encryption');

// Encrypt File
exports.encryptFile = async (req, res) => {
    const file = req.file;
    const { key } = req.body;

    if (!file) return res.status(400).json({ error: 'No file uploaded' });
    if (!key) return res.status(400).json({ error: 'Encryption key is required' });

    const encryptedPath = `encrypted-${Date.now()}.enc`;

    try {
        await encrypt(file.path, encryptedPath, key);

        // Respond with the encrypted file
        res.download(encryptedPath, `${file.originalname}.enc`, () => {
            fs.unlinkSync(file.path); // Remove original file
            fs.unlinkSync(encryptedPath); // Remove encrypted file
        });
    } catch (error) {
        res.status(500).json({ error: 'File encryption failed' });
    }
};

exports.decryptFile = async (req, res) => {
    const file = req.file;
    const { key } = req.body;

    // Validate if file and key are provided
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    if (!key) {
        return res.status(400).json({ error: 'Decryption key is required' });
    }

    const decryptedPath = `decrypted-${Date.now()}.dec`; // Define path for the decrypted file

    try {
        // Use the simplified decrypt function
        await decrypt(file.path, decryptedPath, key);

        // Respond with the decrypted file
        res.download(decryptedPath, `${file.originalname}.dec`, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to send the decrypted file' });
            }

            try {
                fs.unlinkSync(file.path); // Remove the original encrypted file
                fs.unlinkSync(decryptedPath); // Remove the decrypted file after download
            } catch (error) {
                // Silently handle cleanup errors to prevent breaking the response
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'File decryption failed' });
    }
};