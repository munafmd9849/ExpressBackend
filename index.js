require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/youtube",(req,res)=>{
    res.send("<h1>hello world")
})
app.get("/shashi", (req,res)=>{
    res.send("<h1> shashi is a good")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})