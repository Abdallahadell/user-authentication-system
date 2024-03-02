const express = require('express');
const router = express.Router();
const { loginForm } = require('/usr/src/app/src/firebase/services/Login.js');

// POST /api/login
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        res.status(400).send('Missing required fields');
        return;
    }
    loginForm(email, password, res);
});

module.exports = router;
