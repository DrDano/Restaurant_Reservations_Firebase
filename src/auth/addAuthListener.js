import { getAuth as auth } from 'firebase/auth';

export const addAuthListener = (callback) => {
    const onChange = (user) => {
        if (user) {
            callback({});
        } else {
            callback(null);
        }
    }

    return auth().onAuthStateChanged(onChange);
}
