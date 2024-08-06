const express = require('express')

const contactRoute= express.Router()


const{getAll,ajout,update,remove}=require('../controllers/controllersContact')

contactRoute.get('/allcontacts',getAll)

contactRoute.post('/ajout',ajout)

contactRoute.put('/update/:id',update)

contactRoute.delete('/remove/:id',remove)

module.exports= contactRoute