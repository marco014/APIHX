// src/adapters/controllers/products.ts
import { Request, Response } from "express";
import { ProductService } from "../../application/services/productService";

export const createProduct = async (req: Request, res: Response) => {
    const { name, price, amount } = req.body;
    try {
        const product = await ProductService.createProduct(name, price, amount);
        res.status(201).json(product);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const products = await ProductService.getProductById(id);
        if (!products) {
            res.status(404).json({ message: 'Producto no encontrado' });
        } else {
            res.status(200).json(products);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.getProductsAll();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, amount } = req.body;
    try {
        const updatedProduct = await ProductService.updateProduct(id, name, price, amount);
        res.status(200).json(updatedProduct);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await ProductService.deleteProductById(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};