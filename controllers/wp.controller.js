const Workplace = require('../models/Workplace')

exports.findAll = (req, res) => {
    Workplace.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findById = (req, res) => {
    Workplace.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.create = (req, res) => {
    let wp = new Workplace(req.body)
    wp.save()
    .then(r => {
        res.status(201).send(r)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

exports.update = (req, res) => {
    Workplace.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    Workplace.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.clear = (req, res) => {
    Workplace.deleteMany({})
        .then(result => {
            res.send(`${result.deletedCount} rows affected`)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}