const data = require("../utils/users")

const login = (req, res) =>{
    const { username, password } = req.query;

const found = data.find(user =>{
    user.username === username && user.password === password;
});

const access = found ? true : false
res.status(200).json({access})
}

module.exports = login;

