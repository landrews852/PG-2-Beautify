const { Client } = require('../src/db.js');
const infoClient = require('../src/datamock/clients.json');

const clientLoad = async ()=> {
  try{
    await Promise.all(
    infoClient?.map(async cl=> {
      await Client.create({
        id: cl.id,
        name_client: cl.name_client,
        lastname_client: cl.lastname_client,
        profile_picture: cl.profile_picture,
        password: cl.password,
        email: cl.email,
        address: cl.address,
        phone: cl.phone,
        birthday: cl.birthday,
      })
    }))

    console.log("Loaded Clients");

  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  clientLoad,
};