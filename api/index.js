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
const { conn } = require("./src/db.js");
const { loadCategories } = require("../api/loadData/categoryLoad");
const { loadProducts } = require("../api/loadData/productLoad");
//const { clientLoad } = require("../api/loadData/clientLoad");
const { loadServices } = require("../api/loadData/servicesLoad");
const { loadCarousel } = require("../api/loadData/carouselLoad.js");

// Syncing all the models at once.

conn.sync({force:false}).then(() => {
  server.listen(3001, async () => {
    // await loadCarousel();
    // await loadCategories();
    // await loadProducts();
    //await clientLoad();
    // await loadServices();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
