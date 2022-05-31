const express = require('express')
const { newOrder, getOrder, updateOrderStatus, getAllOrders} = require('../controllers/orderControllers')
const router = express.Router()

router.route('/neworder').post(newOrder)
router.route('/getorder').post(getOrder)
router.route('/updateorder').post(updateOrderStatus)
router.route('/getallorders').post(getAllOrders)


module.exports = router;