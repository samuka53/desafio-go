const express = require('express')
const peopleService = require('./people-service');
const app = express()

peopleService.insertNew()

app.get('/', (req, res) => {
    peopleService.getAll((listOfNames) => {
        res.send(listOfNames)
    })

})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})