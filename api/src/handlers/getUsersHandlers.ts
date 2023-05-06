import axios from 'axios';
import { User } from '../models/User';

export const getAllUser = async () => {
	try {
		let users = [];
		for (let i = 0; i < 10; i++) {
			const userApi = await axios.get(
				'https://jsonplaceholder.typicode.com/users',
			);
			const info = await userApi.data[i];
            
			const obj = {
                id: info.id,
				name: info.name,
				nickname: info.username,
				email: info.email,
			};
			users.push(obj);
		}

		const userDb = await User.findAll()

		return [...users, ...userDb];
	} catch (error) {
		console.error(error);
	}
};
