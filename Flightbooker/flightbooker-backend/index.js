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

app.use(express.json());

let seatList=[
    {
        "name": "1A",
        "status": "free",
    },
    {
        "name": "1B",
        "status": "free",
    },
    {
        "name": "1C",
        "status": "free",
    },
    {
        "name": "2A",
        "status": "free",
    },
    {
        "name": "2B",
        "status": "free",
    },
    {
        "name": "2C",
        "status": "free",
    },
    {
        "name": "3A",
        "status": "free",
    },
    {
        "name": "3B",
        "status": "free",
    },
    {
        "name": "3C",
        "status": "free",
    },
]
app.get('/api/seats', (req, res) => {
    //res.send('Here is a list of seats as JSON!!')
    res.set("Access-Control-Allow-Origin", "*")
    res.send(seatList)
})

app.post('/api/seat', (req, res) => {
    //res.send('Seat booked!')
    console.log(req.body);
    seatList=req.body
    res.send(seatList)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

