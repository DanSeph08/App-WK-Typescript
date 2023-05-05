import { Email } from "../models/Email";
import { User } from "../models/User";
export const postUser = async (name: string, nickname: string, email: Email) => {
    try {
      const createUser = await User.create({
        name,
        nickname,
        email,
      })
        return createUser;
    } catch (error) {
		  console.error(error);
    }
};
