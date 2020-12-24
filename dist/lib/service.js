"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
const ENDPOINT = 'https://jsonplaceholder.typicode.com';

 async function getData(id){
    try {
        const {data: users} = await _axios2.default.get(`${ENDPOINT}/users/${id}`);
        const posts = await _axios2.default.get(`${ENDPOINT}/posts?userId=${id}`).then(result => result.data)

        const result = users;
        result.posts = posts;
        return result;
    }catch(err){
        console.log(err);
    }
} exports.getData = getData;
