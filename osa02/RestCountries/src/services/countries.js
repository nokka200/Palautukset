import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/';
const apiAll = 'api/all';

const getAll = () => { 
    const request = axios.get(baseUrl + apiAll);
    return request.then(response => response.data);
};

export default { getAll };