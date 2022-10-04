import { getFirestore, collection, query, where, getDocs, doc } from 'firebase/firestore';


export const getRestaurant = async id => {
    const db = getFirestore();
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
