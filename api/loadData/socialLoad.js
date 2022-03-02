const { Social } = require("../src/db.js");

const data = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  email: "beauty@email.com"
}

const loadSocial = async () => {
  try {
    await Social.create(data)
  } catch (error) {
    return error
  }
}

module.exports = {
  loadSocial,
}