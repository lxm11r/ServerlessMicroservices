//const axios = require('axios');
import { isSSRSafeAttrName } from "@vue/shared";
import axios from "axios";
export async function getAllSeats() {
    //axios.defaults.port=3000;
    const response = await axios.get('/api/seats');
    return response.data;
}

export async function bookSeat(data) {
    const response = await axios.post(`/api/seat`, {seat: data});
    return response.data;
}