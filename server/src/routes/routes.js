const router = require("express").Router();
const deleteActivities = require("../controllers/deleteActivities");  // ! ASDASD
const getActivities = require("../controllers/getActivities");
const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");

router.get('/countries', getCountries);                    //Funciona // ! GET
router.get('/countries/:id', getCountryById);              //Funciona // ! GET
router.get('/countries/country/name', getCountryByName);   //Funciona // ! GET
router.post('/activities', postActivities);                //Funciona // ! POST
router.get('/activities', getActivities);                  //Funciona // ! GET
router.delete('/delete', deleteActivities);

module.exports = router;