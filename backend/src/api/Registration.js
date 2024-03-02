const express = require('express');
const router = express.Router();
const { registrationForm } = require('/usr/src/app/src/firebase/services/Registration.js');

// POST /api/registration
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const displayName = req.body.displayName;
    if(!email || !password || !displayName){
        res.status(400).send('Missing required fields');
        return;
    }
    registrationForm(email, password, displayName, res);
});

module.exports = router;
