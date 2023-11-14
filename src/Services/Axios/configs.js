import axios from "axios";
// http://localhost:3000
const apiRequests = axios.create({
    baseURL:'https://portfolio-json-server-vercel.vercel.app',
    headers: {
        'Content-Type' : 'application/json',
    }
})


export default apiRequests