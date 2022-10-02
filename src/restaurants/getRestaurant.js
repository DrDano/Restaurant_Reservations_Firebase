import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, doc } from 'firebase/firestore';
import { firebaseConfig } from '../config';


export const getRestaurant = async id => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const q = query(collection(db, "restaurants"), where('restaurantId', '==', id.toString()));
    const querySnapshot = await getDocs(q);
    const restaurant = querySnapshot.docs.map((doc) => {
        return doc.data()
    });

    return {
        ...restaurant,
        id,
    }
}
