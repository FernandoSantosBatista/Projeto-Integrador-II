import api from './api';

function getAll(){
    return new Promise((resolve, reject) => {
        return api.get('/register')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function getById(id){
    return new Promise((resolve, reject) => {
        return api.get(`/register/${id}/`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function register(register){
    return new Promise((resolve, reject) => {
        return api.post(`/register`, register)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function update(register){
    return new Promise((resolve, reject) => {
        return api.put(`/register/${register.id}/`, register)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function remove(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/register/${id}/`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}


export default {
    getAll,
    getById,
    register,
    update,
    remove
}