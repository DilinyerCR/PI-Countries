const { Activity, Country } = require('../db');

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll({
            include: {
                model: Country
            }
        });

        res.status(200).json(allActivities);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = getActivities;