import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_ENCRYPTION_SECRET_KEY;

// Encrypt function
export const encryptData = (data: any) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

// Decrypt function
export const decryptData = (encryptedData: string) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
