const { Router } = require("express");
const { Carousel } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const findData = await Carousel.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
    res.status(200).send(findData);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { image, title, description } = req.body;
    if (image && title && description) {
      const data = await Carousel.findAll();
      if (data.length === 5) {
        return res.status(200).send("maximum images")
      }
      await Carousel.create({
        image,
        title,
        description
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
      const { image, title, description } = req.body;
      const data = {
        image,
        title,
        description
      }
      await Carousel.update(data, {
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