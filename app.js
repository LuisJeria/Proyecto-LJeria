
const express = require('express')
const app = express()
const port = 3000


exports.ExpressRouter = app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const routes = require('./src/routes/routes')

routes.InitRoutes()


