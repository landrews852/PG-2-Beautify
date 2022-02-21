const services = [
  {
    name_service: "Peoples Financial Corporation",
    price: 90.6,
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/63320/eye-eyelashes-face-woman-63320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4006693/pexels-photo-4006693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Wells Fargo & Company",
    price: 93.27,
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4006693/pexels-photo-4006693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4006693/pexels-photo-4006693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Easterly Government Properties, Inc.",
    price: 8.0,
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/4006693/pexels-photo-4006693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7313967/pexels-photo-7313967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5240291/pexels-photo-5240291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Cascadian Therapeutics, Inc.",
    price: 39.99,
    description:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/7313967/pexels-photo-7313967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5240291/pexels-photo-5240291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Frontier Communications Corporation",
    price: 95.96,
    description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/5240291/pexels-photo-5240291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128233/pexels-photo-5128233.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Petrobras Argentina S.A.",
    price: 96.5,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128233/pexels-photo-5128233.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128221/pexels-photo-5128221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "MSCI Inc",
    price: 13.31,
    description: "In hac habitasse platea dictumst.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/5128233/pexels-photo-5128233.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128221/pexels-photo-5128221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8558244/pexels-photo-8558244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Utah Medical Products, Inc.",
    price: 53.77,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/5128221/pexels-photo-5128221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8558244/pexels-photo-8558244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6935237/pexels-photo-6935237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "BlackRock Science and Technology Trust",
    price: 50.85,
    description: "Curabitur at ipsum ac tellus semper interdum.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/8558244/pexels-photo-8558244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6935237/pexels-photo-6935237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4814915/pexels-photo-4814915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "VictoryShares US 500 Enhanced Volatility Wtd ETF",
    price: 58.2,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    category: ["Lotlux"],
    image: [
      "https://images.pexels.com/photos/4814915/pexels-photo-4814915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8031804/pexels-photo-8031804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4340053/pexels-photo-4340053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Model N, Inc.",
    price: 27.84,
    description:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/7538807/pexels-photo-7538807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7607268/pexels-photo-7607268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6978043/pexels-photo-6978043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Huttig Building Products, Inc.",
    price: 67.01,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/7607268/pexels-photo-7607268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6978043/pexels-photo-6978043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6621075/pexels-photo-6621075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Mallinckrodt plc",
    price: 95.93,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/6621075/pexels-photo-6621075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Neos Therapeutics, Inc.",
    price: 70.49,
    description:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5069494/pexels-photo-5069494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Novadaq Technologies Inc",
    price: 45.36,
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5069494/pexels-photo-5069494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6781240/pexels-photo-6781240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Weight Watchers International Inc",
    price: 98.72,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/5069494/pexels-photo-5069494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6781240/pexels-photo-6781240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5069588/pexels-photo-5069588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Ability Inc.",
    price: 20.21,
    description:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    category: ["Namfix"],
    image: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHcSURBVDjLhZPZihpREIb7JeY2wbcQmjxZbrIQ5nKSIYQ8gyuKOwqKihuKKy5xnJ5GRzteTIjTp51e+HPqDDaKSy7qoqvq/+qvYykNBgP0+310u110Oh202220Wi00m000Go0rANKlkHq9HhzHOYr5fC4g1Wr1IkSiySRQVVVMVhTFhVCOu0CpVDoLkcgyNdM0StTr9eZms4FlWSJPwEqlgnw+fxIi0dRdIxe/cMuqYRgw2SO2v9OiNpvNUCwWkcvljiASTd5Ztm0bJLa3GvTpZ+iT9xySErXpdEoukE6nDyAS35Gt12vRZJomTP0R+q9PYPc3MB6+C9AOMplMyAXi8bgLkWq12ju+I9M0TTRtnzp45pOZ8g2G+vMIMh6PyQUikYiACEq5XJb5jmy1Wr1C/vQ55CMM5XYPwr+1hKgPh0NygVAodOXuUigUZL4jWy6Xx5CHH2B313gaXcOxLeEimUwiEAi8PXhRvp+czWbZYrHYg3yAfvcFf6e3eDE2+2KPu8J+ZDIZOZVKMbrEV0gPz/df4ViGK/b7/R73EU8dRyKRkGOxGKNL3P3EJOb5A/FZAEU0GvXyl2Z0YKPR6KT4IoAiHA57g8EgI7HP5/OcPOX//V35VC8XvzlX/we1NDqN64FopAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJHSURBVDjLfZJPa1NREMV/972ksYmx0bbUpzS1ValpKVQohgguRLuxIBRBcKMbwS/g2l026jfQpWtTcCEFN+Kii0AoSFNpQUirlFprXmybNi/v3nHxYv6Q6oFhLsydc+aeO+rWs8UX08nYkx7bigOIAGIQEcQImCCLMRgjFEuVt+9fzt+jgdC10fjT00PnAQukdbkra0H7PhcOardpQwgBRIEECjSUxAiiTaCsWyQ9Fqc6CB5dP8P4+DCfVnYZONVDtabb66SG4ywWfjCfcQBYWVEddUtEANjYOeTVYql5/hurm3vklrZY3dwj8EjofEIDNyb7AYhGbKIRm+RgL1++7bOxc8h8xuHnb4/joIrFoqRSKQCWl5epVCpEo1Fs2z62QUSoVqu1Uqn0oVAoPA8dbb9DTrwBI5TLs6TTaUKhEEop/gXP8yKO44waYx6HRPvQcL+vr49wOIy3vo4sLCC1GlYqhT19EWKrUPsKGKzIBM7Q7MTIyMhl++Gd/rM7h87M1i8bFbvCoFKobBZrdxe7XMZaW4OPS+iMjSVV0DVU/Tth26dcG7JVu6uFQkEmNjYglwtW0hgwhr25S8SvHoAyIBrEx05k+Lw9idVlkueB1uD7zYjnivh1C0w9CF0PyNu/sUkwNobSuqmO1uynz3HSPgDjNxp9IFi4rgnCU1N4yWRrAq2JztyEiANiAAO9w6iBue4JXNelrjXRbBY5OkI8DxWPE2zE3dbyKIXnebiu20mQz+cfGGNeJxKJmGVZ/A+u65LP5+//AbkTRxnEop0TAAAAAElFTkSuQmCC",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL2SURBVDjLVdNNaBx1GMfx78zO7Lu765qQWIPteqiH+IKCjTmkClIVPHi0pVDSXBT0sGhLUOvJl0OL4AuVBC+CLXpoD1KqweBBWFFajOChSTU20q2h6e66nX2Znfm/ejCJ8Qff6+fy8DjWWgCmz9f3AR/cV0pPhtIQSoM0hoEyAdAFmoAG2kAL+Bz41mNzRqmJh0fzk689MczO9YUphsIU25EeExK6sebPZo9v/ugfAKo7gZFC0gGgflvjOw6eAwkPUr7LvSmXhOviJ+CRsQy7irnyp5fW33e3AC1loWQilIGucAgkdDoRQQRBBK0B3OppAF4/e53JSo4HhvzhbSAfBiP7v5pHHZ2mH2kqJ2cZ+uxjwqBPNzb0IstAgAEc3eGna22WrgfrLoA4Ol2eXfrimZw3QDoeYWyRePh0GZ0/RdTu0o8NfWnAwkYn5sPF1Y4WYtoVR44cNGH01+iwXzT1FvVj76CApUNVxI2ApNNn77EZUrXviZSDsaB9jRKicv7lxxZdM4jm433jabO0Asdn6eTLOC7oQpnfX3gFfrmKnBjnnrmTuFJiLag4RotYA7gmHLyY+LoWmcounBNvYm81cLEkgyaVuXdRe+7GuVijPlPFSfpIren1Q6WE6AC42YsXvjy9e//EtdXbyHyKyqszYOH+946TKHiEbcOVuXMEUwfI+NDqxahYbCy89awFcAEWhvaKj6YO48WQaDTAcXGbDcIA1k6cQuaKYCHruTTaA7SI17eu501Vzw4Bbz84OU6veobvlgW5rubHTy6Q9i2+B8nEvxWysFoPUUJsbANaiKeA535eXqM98OjFFqktsXQQyqC0wVhLuVjkpadHudkK0UI0/gOkfPT5Jx/KvHH48f/9gLYgtUUowMLphXWyPnR7IVrK1k5g7WYz4MziMqV8hlIhTSmXophLcUc2SSrpkvJcDk2NkPKg8XcXLeWNbcAoda52eWWsdnllN3DXZnduVkwnfT+d9inkMpQKWX69Wv8N+GEL+AdfSH+n2ppttwAAAABJRU5ErkJggg==",
    ],
  },
  {
    name_service: "Westport Fuel Systems Inc",
    price: 5.04,
    description:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/6781240/pexels-photo-6781240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5069588/pexels-photo-5069588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Community Trust Bancorp, Inc.",
    price: 94.81,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    category: ["Namfix"],
    image: [
      "https://images.pexels.com/photos/6663365/pexels-photo-6663365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7236744/pexels-photo-7236744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8092944/pexels-photo-8092944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Astoria Financial Corporation",
    price: 39.09,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    category: ["Konklab"],
    image: [
      "https://images.pexels.com/photos/7236744/pexels-photo-7236744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8092944/pexels-photo-8092944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Arlington Asset Investment Corp",
    price: 17.4,
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    category: ["Konklab"],
    image: [
      "https://images.pexels.com/photos/6663365/pexels-photo-6663365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7236744/pexels-photo-7236744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8092944/pexels-photo-8092944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Armstrong Flooring, Inc.",
    price: 1.0,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    category: ["Konklab"],
    image: [
      "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7236744/pexels-photo-7236744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8092944/pexels-photo-8092944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Mallinckrodt plc",
    price: 32.79,
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    category: ["Konklab"],
    image: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGMSURBVDjLY/j//z8DJZiggtx9Sasyd8Yxk21Axo7YSymbow4QZUDJ8QyHoiNpB/IPJP/P3pPwP3177P+mQ5X/6/aV/o9cFrATrwHFxzIcCg+nnplzacr/TbdW/19/c8X/tTeW/l91bdH/5Vfn/y/ZkvPfb7rbHZwGFBxKnTn9fN//jTdX/W8+XPU/cX34/5iVQf8rtuf/L9mc/d9nqutuvC7I2Zv4AOjf/0D//o9fG3YIJh4wy+OS9xTnQ2699kyO7VacRAUi0L/wUPea5LTGtceW9FgA+ncNyekgfJEfZ9AcTyagfw+59ztcgolbVBsdMi7V/a+Xr/lfK0v1AV4XAP27O2tl0v/UJbH/rRtM/5tVGf6PmB74v/dE0//khdH/VVMUZ+I0AOjflxnLE/5PP9v7f8rprv8TT7X/7zvZ8r/nRON/kLhKssIZxXhZB7wusGu22Bk3N+x/1Mzg//qFWv+1s9X+q6cp/1dOUjigEIeqGWcgAv17AOjfS2RnJt08DWbNTNVVVMmNhDAANau2t3wToKQAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALpSURBVDjLdZNrSFNhGMf/Z9uZnjldy+lKKF2ThsqULgZdLAIrKTHKMLvYhS4fgiKLoi/Rx6LID0aIaRAUpQSFEcIMiS6mhoFmN0duVpo6azd1m+852+lZSeSlF36fHv7/532e//ty5eXl7yKRSCrhqqysNGOWU1xc/EEURbMkSY7GxsaMf2sqEqaHw+HbxOHS0lJ5NgMSR6kgCqbXVCSMIbaTu5h0qEKKVcSASTJYBDiSdB0LtEDZyVYVidcRmdMNFCR8S1QR9tf8DWFc8AkKjUGQBYPgRLagE4YExthn4hbRNeMGJEwg1hGSju/Ei/EOLFdehSJsgc29DV1eKxg7IFH3nYRuNgORcFLRaowBchO18LJjGAtkw+3bCPtoUnT+COFcnRU299zdJSu1Voz/eAYuNLA/OhubNMjaZDRDzWkgwYRx3QiQcgcRTsRNxrAnPxC3d/O2+YIhDzrTEnidFnxqqr0cNUggthqNxhzbmYFZMlBgZUYwY/++kmydfgXcvR+pCUN8wjxoExfqogZ+osHpdEqWCw3LBEpBDAOMAj1kqEaK3AellK7WmwswMVgHtYbDl85PEEPsZyg4tkpBm1UTJkLZNnER/rADkXA0e2BkxA1e4qBPL0Toew043gNeG4/YQO+w6B/Mzz3+wB414CcNuD8pnIBX7MG84UewxvqgSy9CaKAKCl4E86fB9bRtlI0GCpeeetL5e0C6vo+oJ/hoCkX0csxiGXbMeY7krC1gQ7VQqmVM+FPR39wakYKB7MWn2zv+xkidc0i8m0hbb0iVld3fkavawElcMga7r0GfrEbIvQBfm1tCJRVdsfZ+b9+UFZOBSNTwPK9pOjfMaT56uMw1RxHz7SXsDS3otLnx4p4NVx72nu1zBbwzMiKxg6j2eDxv6urquJ7PQxJ7/ximnDzExVkw0NE9dr7e+eV+u6uS/szP6QacLE/9gCVr5waXLjKqVmSYIPMTr4KukYOFl9468J/zC7f3tq13JhENAAAAAElFTkSuQmCC",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADwSURBVCjPpdGhSwNhHMbxX93f8WpRs/VAGXYF0SA4DgyGsaDBwdQfJoO23dzumsFgfoNcMEwss3gKr0G4uuzSC6dfy8KdDBHkU79PegT5nfw5SEiIiRnQp0dEJdCaBgmO4ZQjYi/YrU0DDXVyVVlHdDlhe7IRIqL1AU/kMww5YK0ummWM6cww5oHNd1FfUDDi44dHCgpaX3KMx3NLzqgk5xqPp4G0cTh6vHFf4rjE4QiQQ1JSLnjlruSFM1JSFpAWFksXRTmiSYN1VlmhicUyj+x/3mBRzitOWcISY5Cwv5NtVdbLLGIwzGGeTVv+/eY3onJlSlwTV9MAAAAASUVORK5CYII=",
    ],
  },
  {
    name_service: "Blackrock MuniYield New Jersey Fund, Inc.",
    price: 97.01,
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    category: ["Konklab"],
    image: [
      "https://images.pexels.com/photos/6621075/pexels-photo-6621075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6663571/pexels-photo-6663571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name_service: "Deutsch Bk Contingent Cap Tr V",
    price: 86.01,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    category: ["Greenlam"],
    image: [
      "https://images.pexels.com/photos/8031804/pexels-photo-8031804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4340053/pexels-photo-4340053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7538807/pexels-photo-7538807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
];

module.exports = {
  services,
};
