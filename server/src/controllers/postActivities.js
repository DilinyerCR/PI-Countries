const { Activity } = require('../db'); 

const postActivities = async (req, res) => {
    try {
        const {id, name, difficulty, duration, season} = req.body;

        const newActivity = await Activity.create({
            id, name, difficulty, duration, season
        })

        if(!id || !name || !difficulty || !duration || !season) {
            return res.status(400).send("Faltan Datos")
        }

        res.status(200).json(newActivity);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postActivities;