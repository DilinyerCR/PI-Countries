const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        season: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false})
}