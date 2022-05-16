const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.status(200).send('Fergus Magor')
})

app.get('/sneakycoffeerun', (req, res) => {
    res.status(418).send("Error 418 - I'm a Teapot Sorry...")
})

app.get('/answers', (req, res) => {
    res.status(403).send("Error 403 - Forbidden")
})

app.get('*', (req, res) => {
    res.status(404).send('Error 404 - Page Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
