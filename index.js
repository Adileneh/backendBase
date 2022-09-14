const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', (req,res) => {
res.send('mensaje recibido')
})//End point

app.listen(4000, ()=>{
     console.log('servicio corriendo en el puerto4000')
})