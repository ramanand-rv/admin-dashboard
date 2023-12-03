'use server'
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { signIn } from '../auth';

export const addUser = async (formData: any) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
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

export const updateUser = async (formData: any) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        connectToDB();
        const updateFields: any = {
            username,
            email,
            phone,
            password: hashedPassword,
            address,
            isAdmin,
            isActive,
        };
        Object.keys(updateFields).forEach((key) =>
            (updateFields[key] == "" || undefined) && delete updateFields[key]);
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        await User.findOneAndUpdate(filter, updateFields, options);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to update the user info!');
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');

};


export const updateProduct = async (formData: any) => {
    const { id, title, description, price, stock, color, size, category } = Object.fromEntries(formData);
    try {
        connectToDB();
        const updateFields: any = {
            title, description, price, stock, color, size, category,
        };
        Object.keys(updateFields).forEach((key) =>
            (updateFields[key] == "" || undefined) && delete updateFields[key]);
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: false };
        await Product.findByIdAndUpdate(filter, updateFields, options);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to update the product info!');
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');

};

export const authenticate = async (FormData:any) =>{
    const {username, password} = Object.fromEntries(FormData);
    try {
        await signIn('credentials', {username, password})
    } catch (error) {
        console.log(error);
        throw new Error("Failed to authenticate");
    }
}