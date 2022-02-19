//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Category, Product } = require("./src/db.js");
const { categories } = require("./src/datamock/categories.js");
const { products } = require("./src/datamock/productCopy.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    try {
      await Category.bulkCreate(categories);

      await Promise.all(
        products[0].map(async (p) => {
          let product = await Product.create(p);
          await product.setCategory(1);
        })
      );
      await Promise.all(
        products[2].map(async (p) => {
          let product = await Product.create(p);
          await product.setCategory(4);
        })
      );
      await Promise.all(
        products[3].map(async (p) => {
          let product = await Product.create(p);
          await product.setCategory(3);
        })
      );

      // await Category.findOrCreate({ where: { name_category: "cejas" } });
      // await Category.findOrCreate({ where: { name_category: "pestanas" } });
      // await Category.findOrCreate({
      //   where: { name_category: "cuidado facial" },
      // });
    } catch (error) {
      return error;
    }
  });
});
