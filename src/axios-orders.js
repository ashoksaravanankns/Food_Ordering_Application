import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://food-order-application-8958b.firebaseio.com/'
});

export default instance;