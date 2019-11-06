const express = require('express');
const cars = express.Router();

const dbHelper = require('../helpers/cars-model');

cars.get('/', (req, res) => {
    dbHelper.get()
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json({error: true, message: err.message}))
})

cars.get('/:id', idValidator, (req, res) => {
    res.status(200).json({error: false, message: 'Success', data: req.valCar})
       
})

cars.post('/', carBodyValidator, (req, res) => {
    dbHelper.add(req.valCarBody)
    .then( data => {
        if (data){
            res.status(201).json({error: false, message: "Created successfully", data: data})
        }
    }).catch(err => res.status(500).json({message: err.message}))
})

function idValidator(req, res, next) {
    const { id } = req.params;

    dbHelper.get(id)
    .then(car => {
        if (car) {
            req.valCar = car;
            next();
        } else {
            res.status(200).json({error: true, message: 'Failed'})
        }
    })
    .catch(err => res.status(500).json({error: true, message: err.message}))
}

function carBodyValidator (req, res, next) {
    const {vin, make, model, mileage, transmission, status} = req.body;

    if (!Object.keys(req.body).length) {
        res.status(400).json({error: true, message: "Request body missing"})
    } else if (!vin || !make || !model || !mileage) {
        res.status(400).json({error: true, message: "Some required parameters missing"})
    } else {
        req.valCarBody = { vin, make, model, mileage }
        next()
    }
}



module.exports = cars;