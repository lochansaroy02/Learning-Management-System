// Middleware for handling auth
const { Admin } = require('../db')
const adminMiddleware = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    }).then((value) =>{
        if(value){
            next();
        }else {
            res.json({
                messege:'Admin  not crated'
            })
        }
    })
}

module.exports = adminMiddleware;