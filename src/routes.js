import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';
import providerAccessMiddleware from './app/middlewares/providerAccess';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Authentication required
routes.use(authMiddleware);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.post('/files', upload.single('file'), FileController.store);
routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);

// Provider Access only
routes.use(providerAccessMiddleware);

routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
