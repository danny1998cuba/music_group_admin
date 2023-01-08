const { ObjectId } = require('mongoose').Types

exports.idRequired = (req, res, next) => {
    let id = req.params.id
    if (id) {
        if (ObjectId.isValid(id)) {
            next()
            return;
        }
    }

    res.status(401).send("Invalid Id")
}