const fetch = require('isomorphic-fetch');
const fs = require('fs');
const _ = require('lodash');

const rest = {
    getUser: () => {
        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./userData.json', (err, data) => {
                if (err) throw err;
                let res = JSON.parse(data).users;
                resolve(res);
            });
        });
        return promise;
    },
    getUserById: (id) => {
        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./userData.json', (err, data) => {
                if (err) throw err;
                let res = JSON.parse(data).users;
                res = _.find(res, { id: Number(id) })
                resolve(res);
            });
        });
        return promise;
    },
    createUser: (first_name, last_name, gender, age) => {
        // var promise = new Promise(function (resolve, reject) {
        //     setTimeout(function () {
        //         userData.push({ id: (userData.length + 1), first_name, last_name, gender, age });
        //         resolve(userData[userData.length - 1]);
        //     }, 500);
        // });
        // return promise;

        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./userData.json', (err, data) => {
                if (err) throw err;
                let res = JSON.parse(data).users;
                res.push({ id: (res.length + 1), first_name, last_name, gender, age })
                // console.log('createUser', '{ "users":' + JSON.stringify(res) + '}');

                fs.writeFile('./userData.json', '{ "users":' + JSON.stringify(res) + '}', (err, data) => {
                    if (err) throw err;
                    resolve(res[res.length - 1]);
                });
            });
        });
        return promise;

    },
    updateUser: (id, first_name, last_name, gender, age) => {
        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./userData.json', (err, data) => {
                if (err) throw err;
                let res = JSON.parse(data).users;

                const usr = _.find(res, { id: Number(id) });
                usr.first_name = first_name;
                usr.last_name = last_name;
                usr.gender = gender;
                usr.age = age;
                // console.log(res);
                // console.log('updateUser', '{ "users":' + JSON.stringify(res) + '}');

                fs.writeFile('./userData.json', '{ "users":' + JSON.stringify(res) + '}', (err, data) => {
                    if (err) throw err;
                    resolve(usr);
                });
            });
        });
        return promise;

        // var promise = new Promise(function (resolve, reject) {
        //     setTimeout(function () {
        //         const data = _.find(userData, { id: Number(id) });
        //         data.first_name = first_name;
        //         data.last_name = last_name;
        //         data.gender = gender;
        //         data.age = age;
        //         resolve(data);
        //     }, 500);
        // });
        // return promise;
    },
    deleteUser: (id) => {
        var promise = new Promise(function (resolve, reject) {
            fs.readFile('./userData.json', (err, data) => {
                if (err) throw err;
                let res = JSON.parse(data).users;
                const index = _.findIndex(res, { id: Number(id) });
                const usr = res[index];
                res.splice(index, 1);
                // console.log('deleteUser', '{ "users":' + JSON.stringify(res) + '}');

                fs.writeFile('./userData.json', '{ "users":' + JSON.stringify(res) + '}', (err, data) => {
                    if (err) throw err;
                    resolve(usr);
                });
            });
        });
        return promise;
        // var promise = new Promise(function (resolve, reject) {
        //     setTimeout(function () {
        //         const index = _.findIndex(userData, { id: Number(id) });
        //         const data = userData[index];
        //         userData.splice(index, 1);
        //         resolve(data);
        //     }, 500);
        // });
        // return promise;
    }
}

module.exports = rest;