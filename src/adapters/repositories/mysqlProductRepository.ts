import { ProductRepository } from "../../domain/repositories/ProductRepository";
import Product from "../../domain/models/product";
import connectMySQL from "../../infrastructure/database/mysqlConection";
import { RowDataPacket, OkPacket, FieldPacket } from 'mysql2';

class MySQLProductRepository implements ProductRepository {
    async save(product: Product): Promise<Product> {
        const connection = await connectMySQL();
        const [result]: [OkPacket, FieldPacket[]] = await connection.execute(
            'INSERT INTO products (name, price, amount) VALUES (?, ?)',
            [product.name,product.price, product.amount]
        );
        product.id = result.insertId;
        return product;
    }
    
    async findbyID(id: number): Promise<Product | null> {
        const connection= await connectMySQL();
        const [rows]: [RowDataPacket[], FieldPacket[]] = await connection.execute(
            'SELECT * FROM products WHERE id = ?',
        );
        if (rows.length === 0) return null;
        const row = rows[0];
        return new Product(row.id.toString(), row.name, row.price, row.amount);
    }

    async findAll(): Promise<Product[]> {
        const connection = await connectMySQL();
        const [rows] : [RowDataPacket[],FieldPacket[]] = await connection.execute(
            'SELECT * FROM products'
        );
        return rows.map(row => new Product(row.id, row.name, row.price, row.amount));
    }

    async update(product: Product): Promise<Product> {
        const connection = await connectMySQL();
        await connection.execute(
            'UPDATE products SET name= ?, price = ?, amount = ? WHERE id = ?',
            [product.id, product.name, product.price, product.amount]
        );
        return product;
    }

    async deleteById(id: string): Promise<void> {
        const connection = await connectMySQL();
        await connection.execute(
            'DELETE FROM products WHERE id= ?', [id]);
    }
}

export default MySQLProductRepository;