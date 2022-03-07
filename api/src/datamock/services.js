const services = [
  {
    name_service: "Peoples Financial Corporation",
    price: 90.6,
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063393/beautify/services/pexels-photo-8558244_qjdije.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063392/beautify/services/pexels-photo-8031804_jnff8q.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063392/beautify/services/pexels-photo-8092944_tgleax.jpg",
    ],
  },
  {
    name_service: "Wells Fargo & Company",
    price: 93.27,
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063391/beautify/services/pexels-photo-5128233_fbmupf.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063392/beautify/services/pexels-photo-6978043_yb2ejr.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063391/beautify/services/pexels-photo-7313967_foeohw.jpg",
    ],
  },
  {
    name_service: "Easterly Government Properties, Inc.",
    price: 8.0,
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063389/beautify/services/pexels-photo-4814915_ruo5zg.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063389/beautify/services/pexels-photo-7236744_uqebrp.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-5240291_ydzm1b.jpg",
    ],
  },
  {
    name_service: "Cascadian Therapeutics, Inc.",
    price: 39.99,
    description:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063391/beautify/services/pexels-photo-7313967_foeohw.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063390/beautify/services/pexels-photo-7538807_fhtg2c.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063390/beautify/services/pexels-photo-7607268_vmzaqg.jpg",
    ],
  },
  {
    name_service: "Frontier Communications Corporation",
    price: 95.96,
    description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    category: ["cejas"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063389/beautify/services/pexels-photo-4814915_ruo5zg.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063389/beautify/services/pexels-photo-7236744_uqebrp.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-5240291_ydzm1b.jpg",
    ],
  },
  {
    name_service: "Petrobras Argentina S.A.",
    price: 96.5,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    category: ["cejas"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-6621075_jm309l.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-6935237_bfwznk.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-6781240_wm4aml.jpg",
    ],
  },
  {
    name_service: "MSCI Inc",
    price: 13.31,
    description: "In hac habitasse platea dictumst.",
    category: ["pestanas"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063385/beautify/services/pexels-photo-6663571_t0f9cj.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063385/beautify/services/pexels-photo-6663365_edmppi.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063384/beautify/services/pexels-photo-5128221_uthogr.jpg",
    ],
  },
  {
    name_service: "Utah Medical Products, Inc.",
    price: 53.77,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    category: ["pestanas"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063383/beautify/services/pexels-photo-5069494_j3o4yl.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063383/beautify/services/pexels-photo-5128220_matwiy.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063383/beautify/services/pexels-photo-5069588_cuyrvs.jpg",
    ],
  },
  {
    name_service: "BlackRock Science and Technology Trust",
    price: 50.85,
    description: "Curabitur at ipsum ac tellus semper interdum.",
    category: ["pestanas"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063383/beautify/services/pexels-photo-4006693_jxekea.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063383/beautify/services/pexels-photo-4006693_jxekea.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063379/beautify/services/pexels-photo-3762663_x7icz1.jpg",
    ],
  },
  {
    name_service: "VictoryShares US 500 Enhanced Volatility Wtd ETF",
    price: 58.2,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063379/beautify/services/pexels-photo-3997986_ukv1ks.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063378/beautify/services/pexels-photo-4340053_n6yjee.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063378/beautify/services/eye-eyelashes-face-woman-63320_kbidj.jpg",
    ],
  },
  {
    name_service: "Model N, Inc.",
    price: 27.84,
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063379/beautify/services/pexels-photo-3762663_x7icz1.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063379/beautify/services/pexels-photo-3997986_ukv1ks.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063378/beautify/services/pexels-photo-4340053_n6yjee.jpg",
    ],
  },
  {
    name_service: "Huttig Building Products, Inc.",
    price: 67.01,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    category: ["cuidado facial"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-5240291_ydzm1b.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-6621075_jm309l.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-6935237_bfwznk.jpg",
    ],
  },
  {
    name_service: "Mallinckrodt plc",
    price: 95.93,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    category: ["cejas"],
    image: [
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063387/beautify/services/pexels-photo-6781240_wm4aml.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063385/beautify/services/pexels-photo-6663571_t0f9cj.jpg",
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646063385/beautify/services/pexels-photo-6663365_edmppi.jpg",
    ],
  },
];

module.exports = {
  services,
};
