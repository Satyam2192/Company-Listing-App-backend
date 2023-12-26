const express = require("express");
const router = express.Router();
//import controller
const {
    getCompany,
    createCompany,
    UpdateCompany,
    deleteCompany,
    getCompanyById
} = require('../controlers/createCompany')


// define api routes

//get routes
router.get('/getCompany', getCompany);

//get by id
router.get('/getCompany/:id',getCompanyById)

//post routes
router.post('/createCompany', createCompany);

//update request routes
router.put('/updateCompany/:id',UpdateCompany)

//delete company
router.delete('/deleteCompany/:id',deleteCompany)


module.exports = router;