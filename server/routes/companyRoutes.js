const router = require("express").Router();
const CompanyController = require("../controllers/CompanyController");


console.log(CompanyController.index);

//Basic Crud routes
;
router.get("/:domain", CompanyController.show);


module.exports = router;
