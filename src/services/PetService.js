import axios from "axios";

const petsAPI = axios.create({baseURL: "http://localhost:4000/pets"});


async function getPets() {
    const response = await petsAPI.get('/');
    return response.data
}

async function addPet(pet) {
    try {
        const response = await petsAPI.post("/", JSON.stringify(pet), {
            headers: {
                'Content-Type': 'application/json'
              },
        })
        return {
            sucess: true,
            message: response?.data?.message || "Criado com sucesso"
        }
    } catch (error) {
        return {
            sucess: false,
            message: error?.response?.data?.message || "Falha ao cadastrar"
        }
    }
}

export {
    getPets,
    addPet
}