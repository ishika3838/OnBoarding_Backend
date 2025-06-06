const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const preferencesRoutes = require('./preferenceRoutes');
const profileRoutes = require('./profileRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// Combine all routes files
router.use(authRoutes);
router.use(preferencesRoutes);
router.use(profileRoutes);
router.use(dashboardRoutes);

module.exports = router;
