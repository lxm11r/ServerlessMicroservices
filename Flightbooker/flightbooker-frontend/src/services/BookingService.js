import axios from "axios";
//import { loadEnv } from "vite";

const DAPR_HOST = import.meta.env.VITE_DAPR_HOST || "http://localhost";
const DAPR_HTTP_PORT = import.meta.env.VITE_DAPR_HTTP_PORT || "3000"; //was: 3000

let axiosConfig = {
    headers: {
        "dapr-app-id": "flightbooker-backend"
    }
};

export async function getAllSeats() {
    console.log(DAPR_HOST);
    const response = await axios.get(`${DAPR_HOST}:${DAPR_HTTP_PORT}/api/seats`, axiosConfig);
    return response.data;
}

export async function bookSeat(data) {
    const response = await axios.post(`${DAPR_HOST}:${DAPR_HTTP_PORT}/api/seat`, {seat: data}, axiosConfig);
    return response.data;
}
