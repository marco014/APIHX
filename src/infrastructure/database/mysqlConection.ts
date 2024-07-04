import * as mysql from 'mysql2/promise';
import { Connection } from 'mysql2/promise';

const connectMySQL = async (): Promise<Connection> => {
    try {
        const connection = await mysql.createConnection({
            host: "database-1-rds.c4wsy2r85bv0.us-east-1.rds.amazonaws.com",
            user: "luffy",
            password: "12345678",
            database: "mantenimiento"
        });
        console.log('Conectando a la base de datos de MySQL');
        return connection;
    } catch ( error: any) {
        console.error('Error con la conexion con MySQL:', error.message );
        process.exit(1);
    }
};

export default connectMySQL;