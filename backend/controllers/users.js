exports.getUsers = (req, res) => {
    res.json({ message: "List of users" });
};
  
exports.createUser = (req, res) => {
    const { name } = req.body;
    res.json({ message: `User ${name} created successfully` });
};