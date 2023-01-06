const Song = require('../models/Song')

exports.findAll = (req, res) => {
    Song.find({})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.findById = (req, res) => {
    Song.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.create = (req, res) => {
    let song = new Song(req.body)
    song.save()
    .then(r => {
        res.status(201).send(r)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

exports.update = (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.delete = (req, res) => {
    Song.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

exports.clear = (req, res) => {
    Song.deleteMany({})
        .then(result => {
            res.send(`${result.deletedCount} rows affected`)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}