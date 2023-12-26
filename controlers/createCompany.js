// import schema
const Company = require("../models/Company");



// define routes handler

// for get request
exports.getCompany = async (req, res) => {
    try {
      const companys = await Company.find(); // Use await to asynchronously get the companys
      res.json(companys);
    } catch (err) {
      console.log("error in get request");
      console.error(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    }
  };

// for get request with id
exports.getCompanyById = async (req, res) => {
  try {
    // Retrieve the company ID from the request parameters
    const companyId = req.params.id;
 
    // Find the company with the specified ID
    const company = await Company.findById(companyId);
 
    // Check if the company was not found
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }
 
    // Return the company details in the response
    res.json(company);
 
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
 };

 
//for post request
exports.createCompany = async (req, res) => {
    try {
      // extract title and description from request body
      const company = await Company.create(req.body); // Use await to asynchronously create the company
      res.status(201).json({ message: "Company added successfully", data: company }); // Use 201 status for successful creation
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    }
  };



//for update request
exports.UpdateCompany = (req, res) =>{
    try{
        Company.findByIdAndUpdate(req.params.id, req.body)
            .then((data) => res.status(200).json({message:"updated successfully", data}))
    }catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: "internal server error at update request",
          message: err.message,
        });
      }
};

//for delete request
exports.deleteCompany = (req,res) =>{
    try{
        Company.findByIdAndDelete(req.params.id, req.body)
            .then((data)=>res.status(200).json({message:"Deleted successfully", data}))
    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data: "internal server error at delete request",
            message:err.message,
        });
    }
}