const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productRouter = require('./product.js');
const categoriesRouter = require('./categories.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/product', productRouter);
router.use('/api/categories', categoriesRouter);



module.exports = router;