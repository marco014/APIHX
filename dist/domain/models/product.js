"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/domain/model/products.ts
class Product {
    constructor(id, name, price, amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}
exports.default = Product;
