import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData: any) => {
    'use server'
    const {username, email, password, mobile, address, isAdmin, isActive} = Object.fromEntries(formData);

    try {
        connectToDB();
        const newUser = new User({
            username, 
            email,
            password,
            mobile,
            address,
            isAdmin,
            isActive,
        });
        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create user!');
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
};