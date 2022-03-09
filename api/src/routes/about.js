const { Router } = require("express");
const { About } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const findData = await About.findByPk(1);
    res.status(200).send(findData);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { image, description,title,slogan } = req.body;
    if (image && description && title && slogan) {
      await About.create({
        image,
        description,
        title,
        slogan
      });
      res.status(200).send("created");
    }
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
      const { image, description,title, slogan } = req.body;
      const data = {
        image,
        description,
        title,
        slogan
      }
      await About.update(data, {
        where: {
          id : 1,
        },
        returning: true,
      });
      res.status(200).send("updated");
  } catch (err) {
    next(err);
  }
});

module.exports = router;