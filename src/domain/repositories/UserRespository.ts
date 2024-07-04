// src/domain/reositories/UserRepository.ts
import User from "../models/user";

export interface UserRepository {
    save( user: User ): Promise<User>;
    findById( id: string): Promise<User | null>;
    findAll(): Promise<User[]>
    update( user: User ): Promise<User>;
    deleteById( id: string ): Promise<void>;
}