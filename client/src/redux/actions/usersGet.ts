import { allUsers, errorMsg } from '../reducer/usersReducer';
import axios from 'axios';

export const getUsers = () => async (dispatch: any) => {
    try {
        let usersAll: object[];
        usersAll = (await axios.get('http://localhost:3001/api/users')).data;
        dispatch(allUsers(usersAll));
    } catch (error) {
        dispatch(errorMsg('Error in getUsers'))
    }
};