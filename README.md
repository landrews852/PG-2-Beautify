### Client

|     TYPE      |     DETAIL    |     ROUTE                                     |     SEND     |     INFO     |
| ------------- | ------------- | -------------                                 | -------------| -------------| 
|     GET       | get all client|http://localhost:3001/api/client               |              |              |
|     GET      | get client  |  http://localhost:3001/api/client/:id             | params           |   id           |
|     POST      | post client  | http://localhost:3001/api/client            |  body           |   id*, name_client*, lastname_client*, profile_picture, password*, email*, address*, phone, birthday          |
|     PUT       | update client|http://localhost:3001/api/client/:id               |params (id), body         |    id /   name_client, lastname_client, profile_picture, password, email, address, phone, birthday) y la data que se quiera actualizar      |
|     DELETE      | delete client|http://localhost:3001/api/client/:id               |  params            |    id          |

### Admin

|     TYPE      |     DETAIL    |     ROUTE                                     |     SEND     |     INFO     |
| ------------- | ------------- | -------------                                 | -------------| -------------| 
|     GET      | get admin |  http://localhost:3001/api/admin/:id             | params           |   id           |
|     POST      | post admin | http://localhost:3001/api/admin            |  body|id*,admin_name*,password*,profile_picture,email*,address, phone          |
|     PUT       | update admin|http://localhost:3001/api/admin/:id               |params (id), body         |    id /   (admin_name*,password*,profile_picture,email*,address, phone) y la data que se quiera actualizar      |

### Category

|     TYPE      |     DETAIL    |     ROUTE                                     |     SEND     |     INFO     |
| ------------- | ------------- | -------------                                 | -------------| -------------| 
|     GET       | get all categories|http://localhost:3001/api/categories       |              |              |
|     POST      | post client  | http://localhost:3001/api/categories           |  body        | name_category|

### Product

|     TYPE      |     DETAIL    |     ROUTE                                     |     SEND     |     INFO     |
| ------------- | ------------- | -------------                                 | -------------| -------------| 
|     GET       |get all products|http://localhost:3001/api/product       |              |              |
|     POST      | post client  | http://localhost:3001/api/product           |  body        |product_name*,stock*,cost_by_unit*,description*,category*,warranty*,brand*,image*,discount|
|     GET       |filter         |http://localhost:3001/api/product       |  query    | depende del filtro a aplicar se recibe **categoryId, brand, min, max**          |

### Examples filter products 
* http://localhost:3001/api/product?categoryId=1&brand=Infiniti&min=10&max=50;
* http://localhost:3001/api/product?categoryId=1;
* http://localhost:3001/api/product?categoryId=1&brand=Infiniti;
* http://localhost:3001/api/product?min=10&max=50;
* http://localhost:3001/api/product?min=10;
