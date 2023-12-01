'use server'
import bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData: any) => {
    const { username, email, password, mobile, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
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

export const addProduct = async (formData: any) => {
    const { title, description, price, stock, color, size, category } = Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Product({
            title,
            description,
            price,
            stock,
            color,
            size,
            category,
        });
        await newProduct.save();
    } catch (error) {
        console.log(error);
        throw new Error('Failed to add the product!');
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
};

export const deleteProduct = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete the product!');
    }
    revalidatePath('/dashboard/products');
};

export const deleteUser = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete the user!');
    }
    revalidatePath('/dashboard/users');
};