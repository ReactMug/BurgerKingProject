import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactfirstproject-1e61c-default-rtdb.firebaseio.com/'
});

export default instance;