// src/adapaters/repositories/mongoUserRepositoriy.ts
import { UserRepository } from '../../domain/repositories/UserRespository';
import User from '../../domain/models/user';
import { UserDocument, UserModel } from './schemas/userSchema';

class MongoUserRepository implements UserRepository {
    async save(user: User): Promise<User> {
        const userModel = new UserModel(user);
        const savedUser = await userModel.save();
        return new User(savedUser.id, savedUser.name, savedUser.email, savedUser.password);
    }

    async findById(id: number): Promise<User | null> {
        const user = await UserModel.findById(id);
        if (!user) return null;
        return new User(user.id, user.name, user.email, user.password);
    }

    async findAll(): Promise<User[]> {
        const users: UserDocument[] = await UserModel.find();
        return users.map((user: UserDocument) => new User(user.id, user.name, user.email, user.password));
    }

    async update(user: User): Promise<User> {
        const updatedUser = await UserModel.findByIdAndUpdate(user.id, user, { new: true });
        if (!updatedUser) throw new Error('Usuario no encontrado');
        return new User(updatedUser.id, updatedUser.name, updatedUser.email, updatedUser.password);
    }

    async deleteById(id: string): Promise<void> {
        await UserModel.findByIdAndDelete(id);
    }
}

export default MongoUserRepository;