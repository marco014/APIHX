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
exports.ProductService = void 0;
const product_1 = __importDefault(require("../../domain/models/product"));
class ProductService {
    constructor(productRepository) {
        ProductService.productRepository = productRepository;
    }
    static createProduct(name, price, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new product_1.default(null, name, price, amount);
            return yield ProductService.productRepository.save(product);
        });
    }
    static getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductService.productRepository.findbyID(id);
        });
    }
    static getProductsAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductService.productRepository.findAll();
        });
    }
    static updateProduct(id, name, price, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new product_1.default(id, name, price, amount);
            return yield ProductService.productRepository.update(product);
        });
    }
    static deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ProductService.productRepository.deleteById(id);
        });
    }
}
exports.ProductService = ProductService;
