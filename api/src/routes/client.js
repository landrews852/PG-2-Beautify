const { Router } = require("express");
const { Client, Op } = require("../db");
const { verifyjwt, verifytoken } = require('../auth/auth.js');
const { default: axios } = require("axios");
const router = Router();

// const authvalidate = router.use(verifyjwt)

//Trae la información de todos los clientes
///router.get("/",verifyjwt, async (req, res) => {

//});

// router.post("/protected",  async (req, res) => {
//   // try {
//   //   const allData = await Client.findAll();
//   //   res.json(allData);
//   // } catch (err) {
//   //   res.json(err);
//   // }  
//   // const { objeto } = req.body

//   res.json(userinfo)
// });


// id:
// name_client:
// lastname_client:
// profile_picture:
// password:
// email:
// address:
// phone:
// birthday: 
// disabled:


//Utiliza el id para conseguir la info de un cliente específico
router.get("/info", verifyjwt, async (req, res) => {
  try {
    const userinfo = await verifytoken(req);
    const { sub } = userinfo;
    const id = sub.split('|')[1];
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
router.post("/", verifyjwt, async (req, res) => {
  try {
    const userinfo = await verifytoken(req);
    const { email, sub } = userinfo;
    const idsub = sub.split('|')[1];
    const {
      name_client,
      lastname_client,
      profile_picture,
      address,
      phone,
      birthday
    } = req.body;
    if (name_client && lastname_client && email && address) {
      const newClient = await Client.create({
        id: idsub,
        name_client,
        lastname_client,
        profile_picture,
        email,
        address,
        phone,
        birthday,
        admin: true
      });
    }
    res.json("Usuario Creado");
  } catch (err) {
    res.json(err);
  }

});

// Utiliza el id para identificar al cliente y modificar cualquier otro dato que se le haya pasado y retorna los datos actualizados
router.put("/:id", verifyjwt, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name_client,
      lastname_client,
      profile_picture,
      email,
      address,
      phone,
      birthday,
      admin
    } = req.body;

    let data = {};
    if (name_client !== undefined) data.name_client = name_client;
    if (lastname_client !== undefined) data.lastname_client = lastname_client;
    if (profile_picture !== undefined) data.profile_picture = profile_picture;
    if (email !== undefined) data.email = email;
    if (address !== undefined) data.address = address;
    if (phone !== undefined) data.phone = phone;
    if (birthday !== undefined) data.birthday = birthday;
    if (admin !== undefined) data.admin = admin;
    const updateClient = await Client.update(data, {
      where: {
        id: id,
      },
      returning: true
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

router.get("/search", verifyjwt, async (req, res) => {
  try {
    const { email } = req.query
    const search = `%${email}%`
    const data = await Client.findAll({
      where: {
        email: {
          [Op.iLike]: search
        }
      },
      limit: 3
    })
    // const data = await Client.findAll({
    //   where:
    //     Sequelize.where(Sequelize.fn("concat", Sequelize.col("name_client"), " ", Sequelize.col("lastname_client")), { [Op.iLike]: search })
    // })
    res.json(data)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
