const { Client } = require("../db");

const loadClient = async () => {
  try {
    const infoClient = require("../datamock/Clients_back.json");

    await Promise.all(
      infoClient.map(async (cl) => {
        await Client.create({
          id: cl.id,
          name_client: cl.name_client,
          lastname_client: cl.lastname_client,
          profile_picture: cl.profile_picture[0],
          password: cl.password,
          email: cl.email,
          address: cl.address,
          phone: cl.phone,
          birthday: cl.birthday,
        });
      })
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadClient;
