const products = [
  {
    product_name: "Kellogs Raisan Bran Bars",
    stock: 55,
    cost_by_unit: 16.82,
    description:
      "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    category: ["Trippledex"],
    warranty: 76,
    brand: "Green",
    image: [
      "http://dummyimage.com/200x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/190x100.png/ff4444/ffffff",
      "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
    ],
  },
  {
    product_name: "Beans - Fava Fresh",
    stock: 65,
    cost_by_unit: 84.61,
    description: "leo odio porttitor id consequat in consequat ut nulla sed",
    category: ["Trippledex"],
    warranty: 47,
    brand: "Purple",
    image: [
      "http://dummyimage.com/102x100.png/ff4444/ffffff",
      "http://dummyimage.com/208x100.png/dddddd/000000",
      "http://dummyimage.com/211x100.png/ff4444/ffffff",
    ],
  },
  {
    product_name: "Bacardi Limon",
    stock: 42,
    cost_by_unit: 9.17,
    description:
      "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
    category: ["Solarbreeze"],
    warranty: 42,
    brand: "Teal",
    image: [
      "http://dummyimage.com/182x100.png/cc0000/ffffff",
      "http://dummyimage.com/106x100.png/ff4444/ffffff",
      "http://dummyimage.com/208x100.png/ff4444/ffffff",
    ],
  },
  {
    product_name: "Pimento - Canned",
    stock: 95,
    cost_by_unit: 11.41,
    description:
      "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
    category: ["Solarbreeze"],
    warranty: 99,
    brand: "Blue",
    image: [
      "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/142x100.png/ff4444/ffffff",
      "http://dummyimage.com/230x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Sole - Fillet",
    stock: 58,
    cost_by_unit: 5.67,
    description:
      "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    category: ["cejas"],
    warranty: 33,
    brand: "Aquamarine",
    image: [
      "http://dummyimage.com/213x100.png/ff4444/ffffff",
      "http://dummyimage.com/118x100.png/cc0000/ffffff",
      "http://dummyimage.com/107x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Chestnuts - Whole,canned",
    stock: 17,
    cost_by_unit: 98.69,
    description:
      "quis orci nullam molestie nibh in lectus pellentesque at nulla",
    category: ["Trippledex"],
    warranty: 75,
    brand: "Mauv",
    image: [
      "http://dummyimage.com/151x100.png/ff4444/ffffff",
      "http://dummyimage.com/159x100.png/cc0000/ffffff",
      "http://dummyimage.com/135x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Marsala - Sperone, Fine, D.o.c.",
    stock: 41,
    cost_by_unit: 9.54,
    description:
      "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel",
    category: ["cejas"],
    warranty: 100,
    brand: "Puce",
    image: [
      "http://dummyimage.com/210x100.png/ff4444/ffffff",
      "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/102x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Flower - Commercial Spider",
    stock: 93,
    cost_by_unit: 88.91,
    description:
      "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
    category: ["Trippledex"],
    warranty: 22,
    brand: "Turquoise",
    image: [
      "http://dummyimage.com/173x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/193x100.png/ff4444/ffffff",
      "http://dummyimage.com/122x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Chef Hat 25cm",
    stock: 91,
    cost_by_unit: 30.25,
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
    category: ["cejas"],
    warranty: 42,
    brand: "Mauv",
    image: [
      "http://dummyimage.com/191x100.png/cc0000/ffffff",
      "http://dummyimage.com/149x100.png/dddddd/000000",
      "http://dummyimage.com/154x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Honey - Lavender",
    stock: 96,
    cost_by_unit: 72.24,
    description:
      "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est",
    category: ["Trippledex"],
    warranty: 12,
    brand: "Teal",
    image: [
      "http://dummyimage.com/219x100.png/dddddd/000000",
      "http://dummyimage.com/169x100.png/dddddd/000000",
      "http://dummyimage.com/229x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Isomalt",
    stock: 84,
    cost_by_unit: 89.02,
    description:
      "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
    category: ["cejas"],
    warranty: 27,
    brand: "Yellow",
    image: [
      "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/191x100.png/ff4444/ffffff",
      "http://dummyimage.com/167x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Pepper - Cubanelle",
    stock: 47,
    cost_by_unit: 74.11,
    description:
      "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam",
    category: ["Solarbreeze"],
    warranty: 90,
    brand: "Teal",
    image: [
      "http://dummyimage.com/131x100.png/cc0000/ffffff",
      "http://dummyimage.com/244x100.png/dddddd/000000",
      "http://dummyimage.com/193x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Knife Plastic - White",
    stock: 39,
    cost_by_unit: 11.51,
    description:
      "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
    category: ["Solarbreeze"],
    warranty: 40,
    brand: "Goldenrod",
    image: [
      "http://dummyimage.com/144x100.png/cc0000/ffffff",
      "http://dummyimage.com/104x100.png/cc0000/ffffff",
      "http://dummyimage.com/170x100.png/ff4444/ffffff",
    ],
  },
  {
    product_name: "Halibut - Steaks",
    stock: 79,
    cost_by_unit: 64.1,
    description:
      "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
    category: ["cejas"],
    warranty: 52,
    brand: "Yellow",
    image: [
      "http://dummyimage.com/242x100.png/ff4444/ffffff",
      "http://dummyimage.com/189x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/197x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Wine - Marlbourough Sauv Blanc",
    stock: 89,
    cost_by_unit: 41.38,
    description:
      "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor",
    category: ["cuidado facial"],
    warranty: 22,
    brand: "Goldenrod",
    image: [
      "http://dummyimage.com/131x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/187x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Wine - Casillero Deldiablo",
    stock: 41,
    cost_by_unit: 78.0,
    description:
      "viverra eget congue eget semper rutrum nulla nunc purus phasellus",
    category: ["cuidado facial"],
    warranty: 17,
    brand: "Blue",
    image: [
      "http://dummyimage.com/203x100.png/ff4444/ffffff",
      "http://dummyimage.com/108x100.png/ff4444/ffffff",
      "http://dummyimage.com/158x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Towels - Paper / Kraft",
    stock: 74,
    cost_by_unit: 7.89,
    description:
      "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
    category: ["cuidado facial"],
    warranty: 56,
    brand: "Yellow",
    image: [
      "http://dummyimage.com/142x100.png/cc0000/ffffff",
      "http://dummyimage.com/102x100.png/cc0000/ffffff",
      "http://dummyimage.com/160x100.png/5fa2dd/ffffff",
    ],
  },
  {
    product_name: "Paper Cocktail Umberlla 80 - 180",
    stock: 93,
    cost_by_unit: 87.77,
    description:
      "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    category: ["cejas"],
    warranty: 92,
    brand: "Mauv",
    image: [
      "http://dummyimage.com/156x100.png/cc0000/ffffff",
      "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
    ],
  },
  {
    product_name: "Pork - Loin, Center Cut",
    stock: 32,
    cost_by_unit: 95.79,
    description:
      "cras pellentesque volutpat dui maecenas tristique est et tempus semper",
    category: ["Lotlux"],
    warranty: 19,
    brand: "Pink",
    image: [
      "http://dummyimage.com/177x100.png/dddddd/000000",
      "http://dummyimage.com/234x100.png/ff4444/ffffff",
      "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
    ],
  },
  {
    product_name: "Jolt Cola",
    stock: 81,
    cost_by_unit: 23.08,
    description:
      "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
    category: ["cuidado facial"],
    warranty: 32,
    brand: "Green",
    image: [
      "http://dummyimage.com/135x100.png/dddddd/000000",
      "http://dummyimage.com/180x100.png/ff4444/ffffff",
      "http://dummyimage.com/166x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Alize Sunset",
    stock: 59,
    cost_by_unit: 61.38,
    description:
      "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et",
    category: ["Lotlux"],
    warranty: 94,
    brand: "Red",
    image: [
      "http://dummyimage.com/150x100.png/ff4444/ffffff",
      "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/186x100.png/ff4444/ffffff",
    ],
  },
  {
    product_name: "Tomatoes",
    stock: 92,
    cost_by_unit: 37.43,
    description:
      "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
    category: ["Lotlux"],
    warranty: 18,
    brand: "Teal",
    image: [
      "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/101x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Squeeze Bottle",
    stock: 74,
    cost_by_unit: 43.35,
    description:
      "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
    category: ["pestanas"],
    warranty: 58,
    brand: "Puce",
    image: [
      "http://dummyimage.com/121x100.png/dddddd/000000",
      "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
    ],
  },
  {
    product_name: "Pail For Lid 1537",
    stock: 16,
    cost_by_unit: 24.01,
    description:
      "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus",
    category: ["pestanas"],
    warranty: 6,
    brand: "Goldenrod",
    image: [
      "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/178x100.png/5fa2dd/ffffff",
    ],
  },
  {
    product_name: "Milk - Homo",
    stock: 25,
    cost_by_unit: 94.79,
    description:
      "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
    category: ["pestanas"],
    warranty: 10,
    brand: "Aquamarine",
    image: [
      "http://dummyimage.com/170x100.png/cc0000/ffffff",
      "http://dummyimage.com/249x100.png/ff4444/ffffff",
      "http://dummyimage.com/209x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Vanilla Beans",
    stock: 6,
    cost_by_unit: 85.67,
    description:
      "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut",
    category: ["cuidado facial"],
    warranty: 62,
    brand: "Puce",
    image: [
      "http://dummyimage.com/118x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/196x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Napkin - Dinner, White",
    stock: 63,
    cost_by_unit: 97.94,
    description:
      "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
    category: ["pestanas"],
    warranty: 97,
    brand: "Crimson",
    image: [
      "http://dummyimage.com/216x100.png/ff4444/ffffff",
      "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/118x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Bar Energy Chocchip",
    stock: 6,
    cost_by_unit: 95.49,
    description:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio",
    category: ["cuidado facial"],
    warranty: 76,
    brand: "Puce",
    image: [
      "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/171x100.png/dddddd/000000",
      "http://dummyimage.com/165x100.png/dddddd/000000",
    ],
  },
  {
    product_name: "Nutmeg - Ground",
    stock: 77,
    cost_by_unit: 64.49,
    description:
      "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
    category: ["pestanas"],
    warranty: 55,
    brand: "Khaki",
    image: [
      "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/164x100.png/5fa2dd/ffffff",
      "http://dummyimage.com/185x100.png/cc0000/ffffff",
    ],
  },
  {
    product_name: "Tomatillo",
    stock: 24,
    cost_by_unit: 4.53,
    description:
      "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",
    category: ["pestanas"],
    warranty: 10,
    brand: "Turquoise",
    image: [
      "http://dummyimage.com/123x100.png/dddddd/000000",
      "http://dummyimage.com/181x100.png/ff4444/ffffff",
      "http://dummyimage.com/118x100.png/cc0000/ffffff",
    ],
  },
];

module.exports = {
  products,
};
