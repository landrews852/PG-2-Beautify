const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productRouter = require('./product.js');
const categoriesRouter = require('./categories.js');
<<<<<<< HEAD
const serviceRouter = require('./service.js')
const adminRouter = require('./admin.js')
=======
const serviceRouter = require('./service.js');
const reviewRouter = require('./review.js');
>>>>>>> 96fe4284daea09a0f60be793e81f9b3f5c9fef9e

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/product', productRouter);
router.use('/api/categories', categoriesRouter);
router.use('/api/service', serviceRouter);
<<<<<<< HEAD
router.use('/api/admin', adminRouter);
=======
router.use('/api/review', reviewRouter);
>>>>>>> 96fe4284daea09a0f60be793e81f9b3f5c9fef9e

module.exports = router;