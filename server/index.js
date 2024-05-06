const fs = require('fs');
const path = require('path');
const server = require("./src/server");
const { database } = require('./src/db');
const PORT = 3001;
const { Country } = require('./src/db');

database.sync().then(() => {
    // Construir la ruta absoluta al archivo db.json
    const jsonFilePath = path.join(__dirname, 'api', 'db.json');

    // Leer el archivo de forma síncrona
    const fileContent = fs.readFileSync(jsonFilePath, 'utf8');

    // Parsear el contenido del archivo a un objeto JavaScript
    const data = JSON.parse(fileContent);

    // Acceder a la propiedad 'countries' del objeto 'data'
    const countries = data.countries;

    // Procesar los datos
    countries.forEach(country => {
        Country.create({
            id: country.cca3, // ID (Código de tres letras)
            name: country.name.common, // Nombre
            flag: country.flags.png, // Imagen de la bandera
            continent: country.region, // Continente
            capital: country.capital?.[0], // Capital
            subregion: country.subregion, // Subregión
            area: country.area, // Área
            population: country.population, // Población
        }).catch(error => console.error(error));
    });

    console.log("Database Connected!");
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}).catch((error) => console.error(error));
