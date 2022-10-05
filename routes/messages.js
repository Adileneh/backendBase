//http:localhost:4000/api/v1/messages/

const {Router} = require('express')
const router = Router()
const {rootMessage, byeMessage} = require('../controllers/menssages')

    router.get('/', rootMessage)//End Point //consultas

    router.get('/hi', hiMessage) //End Point

    router.get('/bye', byeMessage) //End Point

    router.post('/', postMessage) //crear o añadir registros

    router.put('/', putMessage) //Actualizar registros    

    router.delete('/', deleteMessage) //Eliminar registros
   
    module.exports = router