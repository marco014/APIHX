// src/application/services/product.ts
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import Product from "../../domain/models/product";

export class ProductService {
    private static productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        ProductService.productRepository = productRepository;
    }

    static async createProduct(name: string, price: number, amount:string): Promise<Product> {
        const product = new Product(null, name, price, amount);
        return  await ProductService.productRepository.save(product);
    }

    static async getProductById(id: string): Promise<Product| null>{
        return await ProductService.productRepository.findbyID(parseInt(id));
    }

    static async getProductsAll(): Promise<Product[]> {
        return await ProductService.productRepository.findAll();
    }

    static async updateProduct(id: string, name: string, price: number, amount:string): Promise<Product> {
        const product = new Product(parseInt(id), name, price, amount);
        return await ProductService.productRepository.update(product);
    }

    static async deleteProductById(id:string): Promise<void> {
        await ProductService.productRepository.deleteById(id);
    }
}