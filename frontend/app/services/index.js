import {fetch, testFetch} from './fetch';
import axios from "axios";

const login = (body) => {
    return fetch('post', '/publicRouts/login', body);
};

const getUsers = () => {
    return testFetch([
        {
            name: 'Test',
            role: 'Admin',
            job: 'Developer',
            age: 20,
        },
        {
            name: 'Vasya',
            role: 'User',
            job: 'Developer',
            age: 18,
        },
    ]);
    return axios.get('/api/users')
        .then(res => {
            return res.data
        })
};


export default {
    login,
    getUsers,
};
