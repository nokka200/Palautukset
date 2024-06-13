import axios from 'axios';

const update = (id, newObject) => { 
    const request = axios.put(`http://localhost:3001/persons/${id}`, newObject);
    return request.then(response => response.data);
};


export default { update };