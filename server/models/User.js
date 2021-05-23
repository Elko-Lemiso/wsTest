const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName : { required : true, type : String},
    lastName : { required : true, type : String},
    email : { required : true, type : String},
    password : { required : true, type : String}
})

module.exports = mongoose.model('UserData', UserSchema);