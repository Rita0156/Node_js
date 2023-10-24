
const { AuthModel } = require("../Model/Auth.model");

const authorization = (userdata) => {
    

    return async (req, res, next) => {
      console.log(userdata)
        let { key } = req.body;
        let user = await AuthModel.findOne({ _id: key });
        if (userdata.includes(user.role)) {
            next()
        } else {
            res.json({ Message:"You are not authorized"})
        }
}
}

module.exports = {
    authorization
}