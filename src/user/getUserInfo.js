import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../config';
const { getFirestore, doc, getDoc } = require('firebase/firestore');
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getUserInfo = async userId => {
    const docRef = doc(db, userId);
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
