import axios from "axios";

const inquiriesAPI = axios.create({baseURL: "http://localhost:4000/inqs"});


async function getInquiries() {
    const response = await inquiriesAPI.get('/');
    return response.data
}

async function addInquiry(inquiry) {
    try {
        const response = await inquiriesAPI.post("/", JSON.stringify(inquiry), {
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
    getInquiries,
    addInquiry
}