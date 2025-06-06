const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { getDashboardSummary } = require('../controllers/dashboardController');


router.get('/dashboard-summary', auth, getDashboardSummary);


module.exports = router;