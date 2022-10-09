import { getFirestore, collection, query, where, getDocs, doc, onSnapshot } from 'firebase/firestore';

export const subscribeToAvailableTimes = async (restaurantId, date, cb) => {
    const db = getFirestore();
    const callback = results => {
        const dateAvailabilityDoc = results[0];
        if (dateAvailabilityDoc) {
            cb({
                id: dateAvailabilityDoc.id,
                availableTimes: dateAvailabilityDoc.availableTimes,
            })
        } else {
            cb({
                id: '', availableTimes: []
            });
        }
    }

    const col = collection(db, 'dateAvailabilities');
    const q = query(col, where('restaurantId', '==', restaurantId), where('date', '==', date));
    const querySnap = await getDocs(q);
    const results = querySnap.docs.map(doc => doc.data());
    onSnapshot(querySnap, {next: callback(results), error: console.log("error")});
    
}