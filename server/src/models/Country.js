const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define("Country", {
    id: {
        type: DataTypes.STRING, // ID (Código de tres letras)
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING, // Nombre
        allowNull: false,
    },
    flag: {
        type: DataTypes.STRING, // Imagen de la bandera
        allowNull: false, // Opcional, dependiendo de tus necesidades
    },
    continent: {
        type: DataTypes.STRING, // Continente
        allowNull: false,
    },
    capital: {
        type: DataTypes.STRING, // Capital
        allowNull: false, // Opcional, dependiendo de tus necesidades
    },
    subregion: {
        type: DataTypes.STRING, // Subregión
        allowNull: false, // Opcional, dependiendo de tus necesidades
    },
    area: {
        type: DataTypes.FLOAT, // Área
        allowNull: true, // Opcional, dependiendo de tus necesidades
    },
    population: {
        type: DataTypes.BIGINT, // Población
        allowNull: false,
    },
  }, {timestamps: false});
};