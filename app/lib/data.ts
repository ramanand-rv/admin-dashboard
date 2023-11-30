import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: any, page: any) => {

    const regex = new RegExp(q, 'i');
    const UsersPerPage = 5;
    try {
        connectToDB();
        const count = (await User.find({ username: { $regex: regex } })).length;
        const users = await User.find({username: {$regex: regex}}).limit(UsersPerPage).skip(UsersPerPage * (page - 1)); 
        
        return {count, users};
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch users');
    }
}