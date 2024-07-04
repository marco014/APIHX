"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../../adapters/controllers/userControllers");
const multerConfig_1 = require("../../infrastructure/config/multerConfig");
const storageService_1 = require("../../application/services/storageService");
const diContainer_1 = require("../../infrastructure/diContainer");
const storageController_1 = require("../../adapters/controllers/storageController");
const productsController_1 = require("../../adapters/controllers/productsController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Inicializar de servicios y controladores
const storageService = new storageService_1.StorageService(diContainer_1.storageRepository);
const storageController = new storageController_1.StorageController(storageService);
app.post('/upload', multerConfig_1.upload.single('file'), storageController.upload);
app.post('/api/users', userControllers_1.createUser);
app.get('/api/users/:id', userControllers_1.getUserById);
app.get('/api/users/', userControllers_1.getAllUsers);
app.put('/api/users/:id', userControllers_1.updateUser);
app.delete('/api/users/:id', userControllers_1.deleteUserById);
app.post('/api/products', productsController_1.createProduct);
app.get('/api/products/:id', productsController_1.getProductById);
app.get('api/products/', productsController_1.getAllProducts);
app.put('/api/products/:id', productsController_1.updateProduct);
app.delete('/api/products/:id', productsController_1.deleteProductById);
exports.default = app;
