/*
Execute to initialize:
npm init
(fill in data)

npm install <module>
Example: npm install express
 */

const express = require('express');
//const axios = require('axios');
const app = express(),
    port = 3000;

const seatList=[
    {
        "name": "1A",
        "status": "free",
    }
]
app.get('/api/seats', (req, res) => {
    //res.send('Here is a list of seats as JSON!!')
    res.send(seatList)
})

app.post('/api/seat', (req, res) => {
    res.send('Seat booked!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})