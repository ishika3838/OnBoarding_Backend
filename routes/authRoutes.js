const router = require('express').Router();
const { register, login, getProfile } = require('../controllers/authController');
const validate = require('../middleware/validate');
const auth = require('../middleware/authMiddleware');

const { registerSchema, loginSchema } = require('../validators/authValidators');

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/profile', auth, getProfile);


module.exports = router;