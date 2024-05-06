const { Country } = require('../db');
const { Op } = require('sequelize');

const getCountryByName = async (req, res) => {
    try {
        const countryName = req.query.name;
        
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${countryName}%`,
                }
            }
        });

        if (countries.length === 0) {
            return res.status(404).json({ message: 'No se encontraron países con ese nombre' });
        }

        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar países por nombre', error: error.message });
    }
};

module.exports = getCountryByName;