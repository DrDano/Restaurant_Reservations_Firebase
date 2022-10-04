import { getFirestore, collection, query, where, getDocs, doc } from "firebase/firestore";
import { mapAsync } from '../util';
import { getUserInfo } from '../user';

export const getReviews = async restaurantId => {
    const db = getFirestore();
    const q = query(collection(db, 'reviews'), where('restaurantId', '==', restaurantId.toString()));
    const querySnapshot = await getDocs(q);
    const queryResult = querySnapshot.docs.map(doc => ({
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
