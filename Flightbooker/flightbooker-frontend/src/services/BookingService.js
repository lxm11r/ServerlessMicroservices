//const axios = require('axios');
import axios from "axios";
export async function getAllSeats() {
    //axios.defaults.port=3000;
    const response = await axios.get('http://localhost:3000/api/seats');
    return response.data;
}

export async function bookSeat(data) {
    const response = await axios.post(`http://localhost:3000/api/seat`, {user: data});
    return response.data;
}