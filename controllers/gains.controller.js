const Gain = require('../models').Gain

exports.findAll = (req, res) => {
    Gain.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findById = (req, res) => {
    Gain.findById(req.params.id_gain)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.create = (req, res) => {
    let gain = new Gain(req.body)
    gain.save()
        .then(r => {
            res.status(201).send(r)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.update = (req, res) => {
    Gain.findByIdAndUpdate(req.params.id_gain, req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    Gain.findByIdAndDelete(req.params.id_gain)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.clear = (req, res) => {
    Gain.deleteMany({})
        .then(result => {
            res.send(`${result.deletedCount} rows affected`)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}