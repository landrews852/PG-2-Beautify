const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productRouter = require('./product.js');
const categoriesRouter = require('./categories.js');
const serviceRouter = require('./service.js');
const reviewRouter = require('./review.js');
const adminRouter = require('./admin.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/product', productRouter);
router.use('/api/categories', categoriesRouter);
router.use('/api/service', serviceRouter);
router.use('/api/review', reviewRouter);
router.use('/api/admin', adminRouter);

module.exports = router;