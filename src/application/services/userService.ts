// src/application/services/userSrvice.ts
import { UserRepository } from '../../domain/repositories/UserRespository'
import User from '../../domain/models/user'

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        console.log("Creating user:", name, email);
        const user = new User(null, name, email, password);
        return await this.userRepository.save(user);
    }

    async getUserById(id: number): Promise<User | null> {
        console.log("Getting user by ID:", id);
        return await this.userRepository.findById(id);
    }

    async getAllUsers(): Promise<User[]> {
        console.log("Getting all users");
        return await this.userRepository.findAll();
    }

    async updateUser(id: number, name: string, email: string, password: string): Promise<User> {
        console.log("Updating user:", id, name, email);
        const user = new User(id, name, email, password);
        return await this.userRepository.update(user);
    }

    async deleteUserById(id: string): Promise<void> {
        console.log("Deleting user by ID:", id);
        return await this.userRepository.deleteById(id);
    }
};

export default UserService;