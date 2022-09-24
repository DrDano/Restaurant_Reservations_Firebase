import { getAuth } from 'firebase/auth';

export const signOut = async() => {
    const auth = getAuth();
    try {
        await auth.signOut();
    } catch (error) {
        throw new Error('Error while signing out')
    }
}