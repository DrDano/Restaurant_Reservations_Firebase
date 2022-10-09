import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../config';
const { getFirestore, doc, getDoc } = require('firebase/firestore');
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const getUserInfo = async userId => {
    
    const docRef = doc(db, `users/${userId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {

        return {
            ...docSnap.data(),
            id: docSnap.data().id
        }
    } else {
        return null;
    }
}
