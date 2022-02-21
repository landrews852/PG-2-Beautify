const { Router } = require("express");
const { Service, Category } = require("../db");
// const { Op } = require("sequelize");
const { Op } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const { name_service, price, description, image, category } = req.body;

  try {
    if (name_service && price && description && image && category) {
      let service = await Service.create({
        name_service,
        price,
        description,
        image,
      });
      //   let categoryy = await Category.findAll({
      //     where: { name_category: { [Op.iLike]: category } },
      //   });
      var categoryy = await Promise.all(
        category.map(
          async (c) => await Category.findAll({ where: { name_category: c } })
        )
      );
      categoryy = categoryy.flat();

      await service.setCategory(categoryy[0].id);
      return res.json("service created");
    }
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Service.destroy({
        where: {
          id,
        },
      });
      return res.send(`Service con ID=${id} eliminado`);
    }
  } catch (e) {
    return res.json("ERROR");
  }
});

router.get("/", async (req, res) => {
  const { category } = req.query;

  try {
    if (category) {
      let categoryy = await Category.findAll({
        where: { name_category: { [Op.iLike]: category } },
      });
      let services = await Service.findAll({
        where: { categoryId: categoryy[0].id },
      });
      return res.json(services);
    } else {
      let services = await Service.findAll();
      return res.json(services);
    }
  } catch (e) {
    return res.json("ERROR");
  }
});

module.exports = router;
