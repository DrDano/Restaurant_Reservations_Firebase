import { getAuth, signInWithEmailAndPassword as login } from 'firebase/auth';


export const signIn = async (email, password) => {
    const auth = getAuth();
    try {
        const result = await login(auth, email, password);
        return {};
    } catch (error) {
        throw new Error('Error signing in');
    }
}
    