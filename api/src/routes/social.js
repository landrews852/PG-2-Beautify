const { Router } = require("express");
const { Social } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const findData = await Social.findAll({
      where: {
        id: 1,
      }
    });
    res.status(200).send(findData);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { instagram, facebook, email } = req.body;
    const data = {
      instagram,
      facebook,
      email
    }
    const response = await Social.update(data, {
      where: {
        id: 1,
      },
      returning: true,
    });
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;