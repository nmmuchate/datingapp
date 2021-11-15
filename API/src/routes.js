import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ListOfUsersController from './app/controllers/Users/ListOfUsersController';
import ListFemaleController from './app/controllers/Users/ListFemaleController';
import ListMaleController from './app/controllers/Users/ListMaleController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/listusers', ListOfUsersController.index);
routes.get('/listfemale', ListFemaleController.index);
routes.get('/listmale', ListMaleController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
