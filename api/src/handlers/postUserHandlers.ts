import { NullishPropertiesOf } from 'sequelize/types/utils';
import { User } from '../models/User';
export const postUser = async (name: string, nickname: string, email: string) => {
	try {
		const createUser = await User.create({
			name,
			nickname,
			email,
		} as Omit<User, NullishPropertiesOf<User>>);
		  return createUser;
	} catch (error) {
		console.error(error);
	}
};
