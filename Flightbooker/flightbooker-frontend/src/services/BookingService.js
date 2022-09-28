//const axios = require('axios');
import axios from "axios";
export async function getAllSeats() {
    axios.defaults.port=3000;
    axios.defaults.baseURL="localhost";
    const response = await axios.get('/api/seats');
    return response.data;
}

export async function bookSeat(data) {
    const response = await axios.post(`/api/seat`, {user: data});
    return response.data;
}