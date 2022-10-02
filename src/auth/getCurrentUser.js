import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getCurrentUser = (cb) => {
    let uid = null;
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        return user.uid;
    }
    return null;
}
