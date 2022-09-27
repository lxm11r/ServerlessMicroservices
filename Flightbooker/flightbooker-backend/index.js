/*
Execute to initialize:
npm init
(fill in data)

npm install <module>
Example: npm install express
 */

const express = require('express')
const app = express()
const port = 3000

app.get('/list-seats', (req, res) => {
    res.send('Here is a list of seats as JSON')
})

app.post('/book-seat', (req, res) => {
    res.send('Seat booked!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})