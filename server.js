const express = require('express')
const cors = require('cors')
const path = require('path')
var Rollbar = require("rollbar");
const app = express()

app.use(express.json())

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/_build/handouts/index.html'))
    rollbar.info("html file served successfully")
    rollbar.info("this was an error-based function")
    try {
        thisFunctiondoesntExist()
    } catch (error) {
        rollbar.error(error)
    }
})

const students = []

var rollbar = new Rollbar({
  accessToken: 'e164af0e475940c3ba6ffbe83f1a780a',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.listen(port, () => {
    console.log(`Port is running on ${port}`)
})