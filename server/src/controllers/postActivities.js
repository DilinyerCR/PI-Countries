const { Activity } = require('../db'); 

const postActivities = async (req, res) => {
    try {
        const { countryId, id, name, difficulty, duration, season} = req.body;

        const newActivity = await Activity.create({
            id, name, difficulty, duration, season
        })

        const activity = await newActivity.addCountry(countryId);

        if(!id || !name || !difficulty || !duration || !season) {
            return res.status(400).send("Faltan Datos")
        }

        res.status(200).json(activity);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postActivities;