// src/domain/model/products.ts
export default class Product {
    id: string | null;
    name: string;
    price: string;
    amount: string;

    constructor(id: string |null, name: string, price: string, amount: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}