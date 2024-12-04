const express = require('express');
const router = express.Router();
const { registerUser, loginUser, setup2FA, verify2FA } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/2fa/setup', setup2FA);
router.post('/2fa/verify', verify2FA);

module.exports = router;
