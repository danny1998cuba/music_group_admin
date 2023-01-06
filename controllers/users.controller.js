const User = require('../models/User')

exports.findAll = (req, res) => {
    User.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findById = (req, res) => {
    User.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.create = (req, res) => {
    let user = new User(req.body)
    user.save()
    .then(r => {
        res.status(201).send(r)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

exports.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.clear = (req, res) => {
    User.deleteMany({})
        .then(result => {
            res.send(`${result.deletedCount} rows affected`)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}