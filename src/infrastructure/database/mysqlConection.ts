import * as mysql from 'mysql2/promise';
import { Connection } from 'mysql2/promise';

const connectMySQL = async (): Promise<Connection> => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.BD_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('Conectando a la base de datos de MySQL');
        return connection;
    } catch ( error: any) {
        console.error('Error con la conexion con MySQL:', error.message );
        process.exit(1);
    }
};

export default connectMySQL;