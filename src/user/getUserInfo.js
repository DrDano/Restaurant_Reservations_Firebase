const { getFirestore, doc, getDoc } = require('firebase/firestore');
const db = getFirestore();

export const getUserInfo = async userId => {
    const docRef = doc(db, userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log(docSnap.data())
        return {
            ...docSnap.data(),
            id: docSnap.data().id
        }
    } else {
        return null;
    }
}
