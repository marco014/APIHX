import express from 'express';
import { createUser, getUserById, getAllUsers, updateUser, deleteUserById } from '../../adapters/controllers/userControllers';
import { upload } from '../../infrastructure/config/multerConfig';
import { StorageService } from '../../application/services/storageService';
import { storageRepository } from '../../infrastructure/diContainer';
import { StorageController } from '../../adapters/controllers/storageController';
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProduct } from '../../adapters/controllers/productsController';

const app = express();
app.use(express.json());

//Inicializar de servicios y controladores
const storageService = new StorageService(storageRepository);
const storageController = new StorageController(storageService);

app.post('/upload', upload.single('file'), storageController.upload);
app.post('/api/users', createUser);
app.get('/api/users/:id', getUserById);
app.get('/api/users/', getAllUsers);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUserById);

app.post('/api/products', createProduct);
app.get('/api/products/:id', getProductById);
app.get('api/products/', getAllProducts);
app.put('/api/products/:id', updateProduct);
app.delete('/api/products/:id', deleteProductById);


export default app;