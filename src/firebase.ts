import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyCmmNOu0ELvF9m1tyfPrCzfR7oesxj8FIE",
    authDomain: "wedding-23cb0.firebaseapp.com",
    databaseURL: "https://wedding-23cb0-default-rtdb.firebaseio.com",
    projectId: "wedding-23cb0",
    storageBucket: "wedding-23cb0.firebasestorage.app",
    messagingSenderId: "817810297562",
    appId: "1:817810297562:web:772abe5c0bee2dad6bcbe3",
    measurementId: "G-XZSYH3MRLJ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);