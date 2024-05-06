const { Activity } = require('../db');

const deleteActivities = async (req, res) => {
    try {
        await Activity.destroy({
            where: {}, // Esto elimina todas las instancias de Activity
        });

        res.status(200).json({ message: 'Todas las actividades han sido eliminadas.' });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deleteActivities;