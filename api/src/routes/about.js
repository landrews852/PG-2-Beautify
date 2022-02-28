const { Router } = require("express");
const { About } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const findData = await About.findAll();
    res.status(200).send(findData);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { image, description,title,slogan } = req.body;
    if (image && description) {
      const data = await About.findAll();
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

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const { image, description } = req.body;
      const data = {
        image,
        description
      }
      await About.update(data, {
        where: {
          id,
        },
        returning: true,
      });
      res.status(200).send("updated");
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const data = await Carousel.findAll();
      if (data.length === 2) {
        return res.status(200).send("minimum images")
      }
      await Carousel.destroy({
        where: {
          id
        }
      });
      res.status(200).send("deleted");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;