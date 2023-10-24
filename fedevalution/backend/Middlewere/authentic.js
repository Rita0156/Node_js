
var jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    
    let token = req.headers.authorization.split(" ")[1];
    console.log(token,'token')

    jwt.verify(token, 'secret', function (err, decoded) {
        
        if (err) {
            res.json({Message:"Please login again authentication failed"})
        }
console.log(decoded,"decoded")
        req.body.key=decoded.userID
        // res.json({message:"aa ja bata"})
        next()
      });
}

module.exports = {
    authentication
}