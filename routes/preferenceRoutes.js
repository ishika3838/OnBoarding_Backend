const router = require('express').Router();
const validate = require('../middleware/validate');
const auth = require('../middleware/authMiddleware');
const { getPreferences, savePreferences } = require('../controllers/preferenceController');
const { preferenceSchema } = require('../validators/preferenceValidators');

router.post('/preferences', auth, validate(preferenceSchema), savePreferences);
router.get('/preferences', auth, getPreferences);


module.exports = router;