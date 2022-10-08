import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { getCurrentUser } from "../auth";

export const updateCurrentUserInfo = async updates => {
    const currentUser = getCurrentUser();

    if (!currentUser) return;

    const db = getFirestore();
    const col = collection(db, 'users');
    const user = doc(col, currentUser.uid);
    updateDoc(user, updates);
}
