import axios from "axios";
import { User } from "../models/User";


export const getAllUser = async () => {
    try {
        let users = [];
        for (let i = 0; i < users.length; i++) {
            const userApi = (await axios.get('https://jsonplaceholder.typicode.com/users/1')).data;

            const obj = {
                id: userApi.id,
                name: userApi.name,
                nickname: userApi.username,
                email: userApi.email,
            };
            users.push(obj);
        };

        const userDb = await User.findAll({
            attributes: ['id', 'name', 'nickname', 'email'],
        })



    } catch (error) {
        
    }
};