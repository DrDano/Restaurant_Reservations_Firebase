import { getFirestore, collection, query, where, doc } from "firebase/firestore";
import { mapAsync } from '../util';
import { getUserInfo } from '../user';


export const getReviews = async restaurantId => {
    const db = getFirestore();
    const restaurantRef = collection(db, restaurantId);
    const querySnap = query(restaurantRef, where('restaurantId', '==', restaurantId));
    const queryResult = querySnap.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));

    const populatedReviews = await mapAsync(queryResult, async (review) => {
        const author = await getUserInfo(review.userId);
        return {
            ...review,
            author,
        }
    });

    return populatedReviews;
}
