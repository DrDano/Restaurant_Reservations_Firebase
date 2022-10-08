import { getCurrentUser } from '../auth';
import { getUserInfo } from './getUserInfo';

export const getCurrentUserInfo = async () => {
    const currentUser = getCurrentUser();
    console.log(currentUser)
    if (!currentUser) {
        return null;        
    }
    
    return await getUserInfo(currentUser.uid);
}
