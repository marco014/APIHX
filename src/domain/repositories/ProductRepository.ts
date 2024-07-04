// src/domain/repositories/ProductRepository.ts
import Product from "../models/product";

export interface ProductRepository {
    save(product: Product): Promise<Product>;
    findbyID(id:string): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    update(product: Product): Promise<Product>;
    deleteById(id: string): Promise<void>;
}