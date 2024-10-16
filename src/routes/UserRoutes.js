const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../midlleware/authMidlleware');

router.post('/register', userController.createuser);
router.post('/login', userController.loginUser);

router.get('/users', authMiddleware, userController.getAllUsers);

router.get('/users/:id',authMiddleware, userController.getUserById);

router.put('/users/:id',authMiddleware, userController.updateUser);

router.delete('/users/:id',authMiddleware, userController.deleteUser);




module.exports = router;