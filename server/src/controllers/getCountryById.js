const { Country } = require('../db');

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params;

        const country = await Country.findByPk(id);
        
        if (!country) {
            return res.status(404).json({ message: 'País no encontrado' });
        }

        res.status(200).json(country);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = getCountryById;