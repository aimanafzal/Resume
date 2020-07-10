'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountInformation = new Schema({
    email: String,
    password: String
})
module.exports = mongoose.model('accountInformation', accountInformation)

