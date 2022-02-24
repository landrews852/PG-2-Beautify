const { Router } = require("express");
const { Client } = require("../db");
const verifyjwt = require('../auth/auth.js');
const { default: axios } = require("axios");
const router = Router();

// const authvalidate = router.use(verifyjwt)

//Trae la información de todos los clientes
router.get("/", async (req, res) => {
  // try {
  //   const allData = await Client.findAll();
  //   res.json(allData);
  // } catch (err) {
  //   res.json(err);
  // }
  res.json("No protegido")
});

router.get("/protected", verifyjwt, async (req, res) => {
  // try {
  //   const allData = await Client.findAll();
  //   res.json(allData);
  // } catch (err) {
  //   res.json(err);
  // }
  const accesstoken = req.headers.authorization.split(' ')[1];
  const response = await axios.get('https://dev-la4nkwuq.us.auth0.com/userinfo',{
    headers: {
      authorization: `Bearer ${accesstoken}`
    }
  });
  const userinfo = response.data;
  res.json(userinfo)
});

//Utiliza el id para conseguir la info de un cliente específico
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const dataClient = await Client.findAll({
        where: {
          id,
        },
      });
      res.json(dataClient);
    }
  } catch (err) {
    res.json(err);
  }
});

//Envia la data de un cliente para agregarla a la BD y retorna toda la data
router.post("/", async (req, res) => {
  try {
    const {
      id,
      name_client,
      lastname_client,
      profile_picture,
      password,
      email,
      address,
      phone,
      birthday,
    } = req.body;
    if (id && name_client && lastname_client && password && email && address) {
      const newClient = await Client.create({
        id,
        name_client,
        lastname_client,
        profile_picture,
        password,
        email,
        address,
        phone,
        birthday,
      });
      res.json("created");
    }
  } catch (err) {
    res.json(err);
  }
});

// Utiliza el id para identificar al cliente y modificar cualquier otro dato que se le haya pasado y retorna los datos actualizados
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name_client,
      lastname_client,
      profile_picture,
      password,
      email,
      address,
      phone,
      birthday,
    } = req.body;
    let data = {};
    if (name_client !== undefined) data.name_client = name_client;
    if (lastname_client !== undefined) data.lastname_client = lastname_client;
    if (profile_picture !== undefined) data.profile_picture = profile_picture;
    if (password !== undefined) data.password = password;
    if (email !== undefined) data.email = email;
    if (address !== undefined) data.address = address;
    if (phone !== undefined) data.phone = phone;
    if (birthday !== undefined) data.birthday = birthday;
    const updateClient = await Client.update(data, {
      where: {
        id,
      },
      returning: true,
    });
    res.json(updateClient[1]);
  } catch (err) {
    res.json(err);
  }
});

// Utiliza el id para identificar al cliente y eliminar su info de la BD
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      await Client.destroy({
        where: {
          id,
        },
      });
      res.json(`Cliente con ID ${id} eliminado`);
    }
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
