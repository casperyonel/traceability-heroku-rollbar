const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(express.json())

const port = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/server.js'))
    rollbar.info("html file served successfully")
})






app.listen(port, () => {
    console.log(`Port is running on ${port}`)
})