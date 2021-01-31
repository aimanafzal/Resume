const express = require('express')
const router = express.Router()
// let email = require('../modal/email')
var nodeoutlook = require('nodejs-nodemailer-outlook')

var email = require('../modal/email')

const accountInformation = require('../modal/accountInformation')

// import {email} from '../modal/email'
router.route('/test').get((req, res) => {

    try {

        res.status(200).send({ Result: "Success" })
    } catch (err) {
        res.status(500).send(err)
    }
})


router.route('/send_email').post(async (req, res) => {
    var _email = new email()
    _email.sendEMail(req.name, req.sender, req.subject,req.message,res)
    
    

})

module.exports = router 