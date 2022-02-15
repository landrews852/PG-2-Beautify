# Estructura

## Categories
```bash
id
name_category

```

## Clients
```bash
dni
profile_picture
name_client
last_name_client
email
address
phone
birthday
```


## Order
```bash
id_order
id_client
order_date
delivery_date
total_amount
discount
status
```


## Products
```bash
code
product_name
stock
cost_by_unit
description
category
image
expiration_date
warraty
brand
country
```


## Products_Order
```bash
products[1-6]
id_order
```


Services
```bash
id_service
name_service
price
description
category
image
```