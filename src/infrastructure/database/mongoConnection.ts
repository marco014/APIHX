// src/infrastructure/database/mongoConnection.ts
import mongoose from 'mongoose';

const connectMongoDB = async(): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {});
        console.log('Conectando con la base de datos con MongoDB');
    } catch (error: any) {
        console.log('Error al conectar con MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectMongoDB;