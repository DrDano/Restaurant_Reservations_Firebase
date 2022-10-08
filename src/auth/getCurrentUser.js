import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getCurrentUser = (cb) => {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
        return user;
    }
    return null;
}
