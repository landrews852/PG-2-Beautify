const { Router } = require("express");
const { Admin } = require("../db");

const router = Router();

//Obtiene la data de un admin por su id y la retorna
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Admin.findAll({
      where: {
        id,
      },
    });
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

//Envia la data de un admin para agregarla a la BD y retorna toda la data
router.post("/", async (req, res) => {
  try {
    const { id, admin_name, password, profile_picture, email, address, phone } =
      req.body;
    if (id && admin_name && password && email) {
      const newAdmin = await Admin.create({
        id,
        admin_name,
        password,
        profile_picture,
        email,
        address,
        phone,
      });
      res.json("created");
    }
  } catch (err) {
    res.json(err);
  }
});

//Utiliza el id para poder modificar cualquier otro dato del admin con dicho id y retorna los datos completos
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { admin_name, password, profile_picture, email, address, phone } =
      req.body;
    let data = {};
    if (admin_name !== undefined) data.admin_name = admin_name;
    if (password !== undefined) data.password = password;
    if (profile_picture !== undefined) data.profile_picture = profile_picture;
    if (email !== undefined) data.email = email;
    if (address !== undefined) data.address = address;
    if (phone !== undefined) data.phone = phone;
    const updateAdmin = await Admin.update(data, {
      where: {
        id,
      },
      returning: true,
    });
    res.json(updateAdmin[1]);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
