// src/domain/repositories/StorageRepositories.ts
export interface StorageRepository {
    upload(file: Express.Multer.File): Promise<String>;
}
