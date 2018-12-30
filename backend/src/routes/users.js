import express from 'express';
import users from '../controllers/users';

const route = express.Router();

route.get('/', users.getUsers);

export default route;
