"use server"
import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: any, page: any, count?: any) => {
    const regex = new RegExp(q, 'i');
    const UsersPerPage = count ? count : 5;
    try {
        connectToDB();
        const count = (await User.find({ username: { $regex: regex } })).length;
        const users = await User.find({ username: { $regex: regex } }).limit(UsersPerPage).skip(UsersPerPage * (page - 1));

        return { count, users };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch users');
    }
};

export const fetchProducts = async (q: any, page: any) => {
    const regex = new RegExp(q, 'i');
    const ProductPerPage = 5;
    try {
        connectToDB();
        const count = (await Product.find({ title: { $regex: regex } })).length;
        const products = await Product.find({ title: { $regex: regex } }).limit(ProductPerPage).skip(ProductPerPage * (page - 1));

        return { count, products };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch Products');
    }
};

export const fetchUser = async (id: any) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch the user');
    }
};

export const fetchProduct = async (id: any) => {
    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch the product');
    }
};