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
const mysqlConection_1 = __importDefault(require("../../infrastructure/database/mysqlConection"));
class MySQLProductRepository {
    save(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysqlConection_1.default)();
            const [result] = yield connection.execute('INSERT INTO products (name, price, amount) VALUES (?, ?)', [product.name, product.price, product.amount]);
            product.id = result.insertId.toString();
            return product;
        });
    }
    findbyID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysqlConection_1.default)();
            const [rows] = yield connection.execute('SELECT * FROM products WHERE id = ?');
            if (rows.length === 0)
                return null;
            const row = rows[0];
            return new product_1.default(row.id.toString(), row.name, row.price, row.amount);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysqlConection_1.default)();
            const [rows] = yield connection.execute('SELECT * FROM products');
            return rows.map(row => new product_1.default(row.id, row.name, row.price, row.amount));
        });
    }
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysqlConection_1.default)();
            yield connection.execute('UPDATE products SET name= ?, price = ?, amount = ? WHERE id = ?', [product.id, product.name, product.price, product.amount]);
            return product;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, mysqlConection_1.default)();
            yield connection.execute('DELETE FROM products WHERE id= ?', [id]);
        });
    }
}
exports.default = MySQLProductRepository;
