const {request, responce } = require ("express") 

const rootMessage = (req = request, res = response) =>{
    res.json({msg: 'Mensajes'})
}

const hiMessage = (req = request, res = response) =>{
    res.json({msg: 'Hola Mundo'})
}

const byeMessage = (req = request, res = response) =>{
    res.json({msg: 'Adios Mundo'})
}

const postMessage = (req = request, res = response) =>{
    res.json({msg: 'Mensaje POST'})
}

const putMessage = (req = request, res = response) =>{
    res.json({msg: 'Mensaje PUT'})
}

const deleteMessage = (req = request, res = response) =>{
    res.json({msg: 'Mensaje DELETE'})
}

    module.exports = {rootMensaje, hiMenssge, byeMessage}