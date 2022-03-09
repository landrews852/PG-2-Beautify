const { About } = require("../src/db.js");
const { about } = require("../src/datamock/about.js");

const loadAbout = async () => {
  try {
    const hola = await About.bulkCreate(about);
    console.log(hola)
  } catch (error) {
    return error;
  }
};
module.exports = {
  loadAbout,
};
