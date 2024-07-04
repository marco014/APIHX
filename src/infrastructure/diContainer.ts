import { UserRepository } from "../domain/repositories/UserRespository";
import MongoUserRepository from "../adapters/repositories/mongoUserRepository";
import MySQLUserRepository from "../adapters/repositories/mysqlUserRepository";
import { UserService } from "../application/services/userService";
import connectMySQL from "./database/mysqlConection";
import connectMongoDB from "./database/mongoConnection";
import { ProductRepository } from "../domain/repositories/ProductRepository";
import MongoProductRepository from "../adapters/repositories/mongoProductRepository";
import MySQLProductRepository from "../adapters/repositories/mysqlProductRepository";
import { S3StorageRepository } from "../adapters/repositories/s3StorageRepository";
import { LocalStorageRepository } from "../adapters/repositories/localStorageRepository";
import { ProductService } from "../application/services/productService";
import { StorageRepository } from "../domain/repositories/StorageRepository";


const userMongoDB: boolean = process.env.USE_MONGODB === 'true';
const useS3: boolean = process.env.USE_S3 === 'true';

let userRepository: UserRepository;
let productRepository: ProductRepository;

if ( userMongoDB ) {
    connectMongoDB();
    userRepository = new MongoUserRepository();
    productRepository = new MongoProductRepository();
} else {
    connectMySQL();
    userRepository = new MySQLUserRepository();
    productRepository = new MySQLProductRepository();
}

let storageRepository: StorageRepository;

if ( useS3 ) {
    storageRepository = new S3StorageRepository();
} else {
    storageRepository = new LocalStorageRepository();
}

const userService = new UserService(userRepository);
const productService = new ProductService(productRepository);

export { userService, productService, storageRepository };