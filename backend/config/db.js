const mongoose = require('mongoose')

const connetDB =() => {
    mongoose.connect(process.env.DB_URL)

    mongoose.connection.on('connected',() => {
        console.log("---- monogodb server conneted with backend ----");
    })
}


module.exports = connetDB