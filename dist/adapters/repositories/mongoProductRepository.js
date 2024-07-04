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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../../domain/models/product"));
const productSchema_1 = require("./schemas/productSchema");
class MongoProductRepository {
    save(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productModel = new productSchema_1.ProductModel(product);
            const saveProduct = yield productModel.save();
            return new product_1.default(saveProduct.id, saveProduct.name, saveProduct.price, saveProduct.amount);
        });
    }
    findbyID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield productSchema_1.ProductModel.findById(id);
            if (!product)
                return null;
            return new product_1.default(product.id, product.name, product.price, product.amount);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield productSchema_1.ProductModel.find();
            return products.map(product => new product_1.default(product.id, product.name, product.price, product.amount));
        });
    }
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateProduct = yield productSchema_1.ProductModel.findByIdAndUpdate(product.id, product, { new: true });
            if (!updateProduct)
                throw new Error('Producto no encontrado');
            return new product_1.default(updateProduct.id, updateProduct.name, updateProduct.price, updateProduct.amount);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productSchema_1.ProductModel.findByIdAndDelete(id);
        });
    }
}
exports.default = MongoProductRepository;
