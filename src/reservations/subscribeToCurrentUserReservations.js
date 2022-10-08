import { subscribeToReservations } from "./subscribeToReservations";
import { getCurrentUser } from '../auth';


export const subscribeToCurrentUserReservations = (cb) => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return cb([]);
    }
    
    return subscribeToReservations(currentUser.uid, cb);
}