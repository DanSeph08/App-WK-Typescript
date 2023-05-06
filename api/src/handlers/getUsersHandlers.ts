import axios from 'axios';
import { User } from '../models/User';
interface dataInfo {
	id: number;
	name: string;
	username: string;
	email: string;
}
export const getAllUser = async () => {
	try {
		const userApi = await axios.get(
			'https://jsonplaceholder.typicode.com/users',
		);
		  const users = userApi.data.slice(0, 10).map((info: dataInfo) => ({
				id: info.id,
				name: info.name,
				nickname: info.username,
				email: info.email,
			}));
            
		const userDb = await User.findAll({
			attributes: ['id', 'name', 'nickname', 'email'],
		})
		return [...users, ...userDb];
	} catch (error) {
		console.error(error);
	}
};
