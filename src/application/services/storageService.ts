import { StorageRepository } from "../../domain/repositories/StorageRepository";

export class StorageService {
    constructor(
        private storageRepository: StorageRepository
    ) {}

    async upload(file: Express.Multer.File): Promise<String> {
        return this.storageRepository.upload(file);
    }
}