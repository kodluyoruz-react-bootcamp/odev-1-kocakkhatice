import axios from 'axios';
const ENDPOINT = 'https://jsonplaceholder.typicode.com';

export async function getData(id){
    try {
        const {data: users} = await axios.get(`${ENDPOINT}/users/${id}`);
        const posts = await axios.get(`${ENDPOINT}/posts?userId=${id}`).then(result => result.data)
        const result = users;
        result.posts = posts;
        return result;
    }catch(err){
        console.log(err);
    }
}
