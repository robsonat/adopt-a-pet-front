import axios from "axios";

const petsAPI = axios.create({baseURL: "http://localhost:4000/pets"});


async function getPets() {
    const response = await petsAPI.get('/');
    return response.data
}

export {
    getPets
}