// src/adapters/repositories/mongoProductRepository.ts
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import Product from "../../domain/models/product";
import { ProductDocument, ProductModel } from "./schemas/productSchema";

class MongoProductRepository implements ProductRepository {
    async save(product: Product): Promise<Product> {
        const productModel = new ProductModel(product);
        const saveProduct = await productModel.save();
        return new Product(saveProduct.id, saveProduct.name, saveProduct.price, saveProduct.amount);
    }

    async findbyID(id: string): Promise<Product | null> {
     const product = await ProductModel.findById(id);
     if ( !product ) return null;
     return new Product(product.id, product.name, product.price, product.amount);
    }

    async findAll(): Promise<Product[]> {
     const  products: ProductDocument[] = await ProductModel.find()  ;
     return products.map(product => new Product(product.id, product.name, product.price, product.amount));
    }

    async update(product: Product): Promise<Product> {
        const updateProduct = await ProductModel.findByIdAndUpdate(product.id,  product, { new: true})  ;
        if (!updateProduct ) throw new Error('Producto no encontrado');
        return new Product(updateProduct.id, updateProduct.name,updateProduct.price, updateProduct.amount);
    }

    async deleteById(id: string): Promise<void> {
        await ProductModel.findByIdAndDelete(id);
    }
}

export default MongoProductRepository;