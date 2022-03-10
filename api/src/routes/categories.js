const { Router } = require("express");
const { Category } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const findData = await Category.findAll();
    res.status(200).send(findData);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name_category } = req.body;
    const getCategory = await Category.create({
      name_category,
    });
    res.status(200).send("created");
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name_category,disabled } = req.body;

    let data = {};
    if (name_category !== undefined) data.name_category = name_category;
    if (disabled !== undefined) data.disabled = disabled;

    const updateCategory = await Category.update(data, {
      where: {
        id,
      },
      returning: true,
    });
    res.json(updateCategory[1]);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Category.destroy({
      where: {
        id,
      },
    });
    res.send(`Id ${id} eliminado`);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
