require("dotenv").config();
const { Sequelize } =  require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const activityModel = require('./models/Activity');
const countryModel = require('./models/Country');

const database = new Sequelize((`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/countries`), {
    logging: false , native: false
});

activityModel(database);
countryModel(database);

const { Activity, Country } = database.models;

Country.belongsToMany(Activity, { through: 'CountryActivity', timestamps: false });
Activity.belongsToMany(Country, { through: 'CountryActivity', timestamps: false });

module.exports = {
    ...database.models,
    database,
    Activity,
    Country
};