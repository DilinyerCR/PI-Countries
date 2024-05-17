const { Country, Activity } = require('../db');

const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll({
            include: {
                model: Activity
            }
        });

        res.status(200).json(countries);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = getCountries;