"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProduct = exports.getAllProducts = exports.getProductById = exports.createProduct = void 0;
const productService_1 = require("../../application/services/productService");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, amount } = req.body;
    try {
        const product = yield productService_1.ProductService.createProduct(name, price, amount);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createProduct = createProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const products = yield productService_1.ProductService.getProductById(id);
        if (!products) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        else {
            res.status(200).json(products);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getProductById = getProductById;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productService_1.ProductService.getProductsAll();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllProducts = getAllProducts;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, price, amount } = req.body;
    try {
        const updatedProduct = yield productService_1.ProductService.updateProduct(id, name, price, amount);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateProduct = updateProduct;
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield productService_1.ProductService.deleteProductById(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteProductById = deleteProductById;
