// const {firebaseAuth} = require('/usr/src/app/src/firebase/firebaseConfig');
const {firebaseAuth} = require(`/usr/src/app/src/firebase/firebaseConfig`);

const registrationForm = (email, password, displayName, res) => {
    firebaseAuth.createUserWithEmailAndPassword(firebaseAuth.getAuth(), email, password).then((userCredential) => {
        const currentUser = userCredential.user;
        firebaseAuth.updateProfile(currentUser, { displayName: displayName }).then(() => {
        firebaseAuth.sendEmailVerification(currentUser).then(() => {
                /* 
                currentUser.getIdToken().then((token) => {
                    res.status(200).send({msg:'Registration successful',token});
                }).catch((error) => {
                    console.error('Token error:', error);
                });
                */
                res.status(200).send('Registration successful');
            }).catch((error) => {
                console.error('Email verification failed:', error);
                userCredential.user.delete();
            });
        }).catch((error) => {
            console.error('Profile update failed:', error);
            userCredential.user.delete();
        })
    }).catch((error) => {
        if(!!error.code){ 
            if(error.code === 'auth/email-already-in-use'){
                res.status(400).send('Email already in use');
            } else if(error.code === 'auth/invalid-email'){
                res.status(400).send('Invalid email');
            } else if(error.code === 'auth/weak-password'){
                res.status(400).send('Weak password');
            } else {
                console.dir(error);
                console.dir(error.code);
                res.status(400).send('Registration failed');
            }
        } else {
            console.dir(error);
            console.dir(error.code);
            res.status(400).send('Registration failed');
        }
    });
};

module.exports = { registrationForm };