const Member = require('../models').Member

exports.findAll = (req, res) => {
    Member.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findById = (req, res) => {
    Member.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.create = (req, res) => {
    let member = new Member(req.body)
    member.save()
    .then(r => {
        res.status(201).send(r)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

exports.update = (req, res) => {
    Member.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    Member.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.clear = (req, res) => {
    Member.deleteMany({})
        .then(result => {
            res.send(`${result.deletedCount} rows affected`)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}