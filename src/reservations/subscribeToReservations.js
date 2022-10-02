import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { mapAsync } from '../util';
import { getRestaurant } from '../restaurants';
import { firebaseConfig } from '../config';
const app = initializeApp(firebaseConfig);

export const subscribeToReservations = async (userId, cb) => {
    const callback = async querySnapshot => {
        const reservations = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));

        const populatedReservations = await mapAsync(reservations, async reservation => {
            const restaurant = await getRestaurant(reservation.restaurantId);
            return {
                ...reservation,
                restaurant,
            }
        });

        cb(populatedReservations);
    }

    const db = getFirestore(app);
    const q = query(collection(db, 'reservations'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    onSnapshot(callback(querySnapshot));
}
