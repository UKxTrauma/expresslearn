

exports.listUsers = (req, res) => {
    res.status(200).send({ message: "listing users"});
}

exports.addUser = (req, res) => {
    res.status(201).send({ message: "user added"});
}