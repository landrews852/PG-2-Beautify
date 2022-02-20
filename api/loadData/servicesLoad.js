const { Service, Category } = require("../src/db.js");
const { services } = require("../src/datamock/services.js");

const loadServices = async() => {
 try{
  services?.map(async (se) => {
    var categoryy = await Promise.all(
      se.category.map(
        async (c) =>  
          await Category.findAll({
            where: { name_category: c.toLowerCase() },
          })
      )
    );
    categoryy = categoryy.flat();

    let service = await Service.create({
      name_service: se.name_service,
      price: se.price,
      description: se.description,
      image: se.image[0],
    });

    service.setCategory(categoryy[0].id);
    
    console.log("Loaded Services");
  });
 } catch(error) {
  console.log(error);
}
  // services?.map(async (s) => {
  //   var categoryy = await Promise.all(
  //     s.category.map(
  //       async (c) =>  
  //         await Category.findAll({
  //           where: { name_category: c.toLowerCase() },
  //         })
  //     )
  //   );
  //   categoryy = categoryy.flat();

  //   let service = await Service.create({
  //     name_service: s.name_service,
  //     price: s.price,
  //     description: s.description,
  //     image: s.image[0],
  //   });

  //   service.setCategory(categoryy[0].id);
    
  //   console.log("Loaded Services");
  // });
};
module.exports = {
  loadServices,
};

//console.log(services)
  // await Promise.all(
  //   services?.map(async se=>{
  //     await Service.create({
  //       name_service: se.name_service,
  //       price: se.price,
  //       description: se.description,
  //       image: se.image[0],
  //     })
  //   })
  // )