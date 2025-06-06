const router = require('express').Router();
const validate = require('../middleware/validate');
const auth = require('../middleware/authMiddleware');
const { updateProfile } = require('../controllers/profileController');
const { profileUpdateSchema } = require('../validators/profileValidators');


router.patch('/profile', auth, validate(profileUpdateSchema), updateProfile);


module.exports = router;