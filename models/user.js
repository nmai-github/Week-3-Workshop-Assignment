const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); //import plugin
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
    type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose); //plugin the plugin. use the method plugin on the userSchema with the argument

module.exports = mongoose.model('User', userSchema); //model name is User, collection will be named "users". second argument is the schema to use for this model