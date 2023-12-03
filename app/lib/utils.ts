import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection: any = {}
    const DB_LINK: any = process.env.MONGO

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(DB_LINK);
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't connect to DB")
    }
}