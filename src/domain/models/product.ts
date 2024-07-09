// src/domain/model/products.ts
export default class Product {
    id: number | null;
    name: string;
    price: number;
    amount: string;

    constructor(id: number |null, name: string, price: number, amount: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}