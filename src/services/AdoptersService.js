import axios from "axios";

const adoptersAPI = axios.create({baseURL: "http://localhost:4000/adopters"});


async function getAdopters() {
    const response = await adoptersAPI.get('/');
    return response.data
}

export {
    getAdopters
}