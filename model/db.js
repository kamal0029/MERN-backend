const mongoose = require('mongoose');
const connect = async () => {
    try {
        const connection = mongoose.connect('mongodb://localhost:27017/sampledb');
        console.log("DB CONNECTED")
    }
    catch (error) {
        console.log("error");
    }
}
module.exports=connect;