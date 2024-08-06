const express=require('express');
const { registerSchema, loginSchema } = require('../validators/auth-validators');
const contactSchema=require('../models/user-models.js');
const validate = require('../middlewars/validate-middlewars');

//import express.Roter
const router=express.Router();
const authcontroller=require('../controller/auth-controller.js');
const contact = require('../controller/contact-controlller.js');
router.route("/").get(authcontroller.home);
router.route("/register").post(validate(registerSchema),authcontroller.register);
router.route("/login").post(validate(loginSchema),authcontroller.login);
router.route("/contact").post(contact)
router.route("/user").get(authcontroller.user);

module.exports=router;