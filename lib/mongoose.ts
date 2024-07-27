import mongoose from "mongoose";

let isConnected = false; // track the copnnection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URI) return console.log('MONGO URI is not defined');
    
    if (isConnected) return console.log('=> existing database in use');
    
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        isConnected = true
        console.log('=> database connection successful');
        
    } catch (error) {
        console.log(error);
    }
    
    
}