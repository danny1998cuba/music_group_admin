const Cloth = require('../models/Cloth')

exports.findAll = (req, res) => {
    Cloth.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findById = (req, res) => {
    Cloth.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.create = (req, res) => {
    let cloth = new Cloth(req.body)
    cloth.save()
        .then(r => {
            res.status(201).send(r)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.update = (req, res) => {
    Cloth.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    Cloth.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.clear = (req, res) => {
    Cloth.deleteMany({})
        .then(result => {
            res.send(`${result.deletedCount} rows affected`)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}