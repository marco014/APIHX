// src/domain/models/User.ts
export default class User {
    id: number | null;
    name: string;
    email: string;
    password: string

    constructor(id: number | null, name: string, email: string, password: string ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}