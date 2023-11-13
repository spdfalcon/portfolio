import axios from "axios";

const apiRequests = axios.create({
    baseURL:'https://portfolio-json-server-vercel.vercel.app',
    headers: {
        'Content-Type' : 'application/json',
    }
})


export default apiRequests