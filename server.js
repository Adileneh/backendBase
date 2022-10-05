const express = require('express')
const messagesRouter = require("./routes/messages")

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            messages: "/api/v1/messages"
        }
        this.routes()
    }

    routes() {
        // this.app.get('/',(req,res)=>{
        //     res.send('hello word')
        // })// End point
        this.app.use(this.paths.messages, messagesRouter)
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('servicio corriendo en el puerto', this.port)
        })
    }
}
module.exports = Server

