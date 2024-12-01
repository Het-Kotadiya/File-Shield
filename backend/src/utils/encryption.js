const crypto = require('crypto');
const fs = require('fs');

// Encrypt File
exports.encrypt = (inputPath, outputPath, userKey) => {
  return new Promise((resolve, reject) => {
    try {
      const key = crypto.scryptSync(userKey, 'salt', 32);
      const iv = crypto.randomBytes(16); // Generate a unique IV for this operation

      const readStream = fs.createReadStream(inputPath);
      const writeStream = fs.createWriteStream(outputPath);
      const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

      // Write the IV at the beginning of the output file
      writeStream.write(iv);

      readStream.pipe(cipher).pipe(writeStream)
        .on('finish', () => resolve())
        .on('error', (error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

// Decrypt File
exports.decrypt = (inputPath, outputPath, userKey) => {
  return new Promise((resolve, reject) => {
    try {
      const key = crypto.scryptSync(userKey, 'salt', 32);

      // Read the entire file
      const fileBuffer = fs.readFileSync(inputPath);
      
      // Extract IV (first 16 bytes)
      const iv = fileBuffer.slice(0, 16);
      
      // The rest of the file is the encrypted data
      const encryptedData = fileBuffer.slice(16);

      const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
      
      // Decrypt the data
      const decryptedData = Buffer.concat([
        decipher.update(encryptedData),
        decipher.final()
      ]);

      // Write decrypted data to output file
      fs.writeFileSync(outputPath, decryptedData);
      
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};