import express from 'express';
import publicRouts from './publicRouts';
import usersRouts from './users';
import auth from './../middlewares/auth';

const route = express();
route.use('/publicRouts', publicRouts);
route.use('/api/users', usersRouts);

export default route;
