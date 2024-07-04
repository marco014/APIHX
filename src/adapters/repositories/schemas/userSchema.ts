// src/adapters/repositories/schemas/userSchema.ts
import { Schema, model, Document } from "mongoose";

interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const UserModel = model<UserDocument>('User', userSchema);

export { UserDocument, UserModel };