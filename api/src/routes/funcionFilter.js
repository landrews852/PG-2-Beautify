const { Op } = require("../db");

function filter(category, brand, min, max) {
  let condition;

  if (category || brand || min || max) {
    if (category && brand && min && max) {
      condition = {
        where: {
          [Op.and]: [
            { categoryId: category },
            { brand: brand },
            {
              cost_by_unit: {
                [Op.between]: [parseFloat(min), parseFloat(max)],
              },
            },
          ],
        },
      };
      return condition;
    }
    if (category && min && max) {
      condition = {
        where: {
          [Op.and]: [
            { categoryId: category },
            {
              cost_by_unit: {
                [Op.between]: [parseFloat(min), parseFloat(max)],
              },
            },
          ],
        },
      };
      return condition;
    }
    if (brand && min && max) {
      condition = {
        where: {
          [Op.and]: [
            { brand: brand },
            {
              cost_by_unit: {
                [Op.between]: [parseFloat(min), parseFloat(max)],
              },
            },
          ],
        },
      };
      return condition;
    }
    if (min && max) {
      condition = {
        where: {
          cost_by_unit: { [Op.between]: [parseFloat(min), parseFloat(max)] },
        },
      };
      return condition;
    }
    if (category && brand) {
      condition = {
        where: {
          [Op.and]: [{ categoryId: category }, { brand: brand }],
        },
      };
      return condition;
    }
    if (category && min) {
      condition = {
        where: {
          [Op.and]: [
            { categoryId: category },
            { cost_by_unit: { [Op.between]: [parseFloat(min)] } },
          ],
        },
      };
      return condition;
    }
    if (category && max) {
      condition = {
        where: {
          [Op.and]: [
            { categoryId: category },
            { cost_by_unit: { [Op.between]: [0, parseFloat(max)] } },
          ],
        },
      };
      return condition;
    }
    if (brand && min) {
      condition = {
        where: {
          [Op.and]: [
            { brand: brand },
            { cost_by_unit: { [Op.between]: [parseFloat(min)] } },
          ],
        },
      };
      return condition;
    }

    if (brand && max) {
      condition = {
        where: {
          [Op.and]: [
            { brand: brand },
            { cost_by_unit: { [Op.between]: [0, parseFloat(max)] } },
          ],
        },
      };
      return condition;
    }
    if (category) {
      condition = {
        where: {
          categoryId: category,
        },
      };
      return condition;
    }
    if (brand) {
      condition = {
        where: {
          brand: brand,
        },
      };
      return condition;
    }
    if (min) {
      condition = {
        where: {
          cost_by_unit: { [Op.gt]: parseFloat(min) },
        },
      };
      return condition;
    }
    if (max) {
      condition = {
        where: {
          cost_by_unit: { [Op.between]: [0, parseFloat(max)] },
        },
      };
      return condition;
    }
  }
  return {};
}

module.exports = {
  filter,
};
