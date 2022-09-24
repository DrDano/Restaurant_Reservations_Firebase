import { getAuth as auth } from 'firebase/auth';

export const getCurrentUser = () => {
    const user = auth.currentUser
    if (!user) return null;
    return {};
}
