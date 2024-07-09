// src/adapters/repositories/schemas/productSchema.ts
import mongoose, { Document, Schema } from "mongoose";

export interface ProductDocument extends Document {
    name: string;
    price: number;
    amount: string; 
}

const productSchema = new Schema ({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: String, required: true },
});

export const ProductModel = mongoose.model<ProductDocument>('Product', productSchema);