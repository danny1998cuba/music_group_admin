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