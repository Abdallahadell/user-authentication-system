const { firebaseAuth } = require('/usr/src/app/src/firebase/firebaseConfig');

const loginForm = (email, password, res) => {
    firebaseAuth.signInWithEmailAndPassword(firebaseAuth.getAuth(), email, password).then((userCredential) => {
        const currentUser = userCredential.user;
        if (currentUser.emailVerified) {
            currentUser.getIdToken().then((token) => {
                res.status(200).send({ msg: 'Login successful', token, userData: { displayName: currentUser.displayName, email: currentUser.email } });
            }).catch((error) => {
                console.error('Token error:', error);
            });
        } else {
            res.status(401).send('Email not verified');
        }
    }).catch((error) => {
        if (!!error.code) {
            if (error.code === 'auth/user-not-found') {
                res.status(400).send('User not found');
            } else if (error.code === 'auth/wrong-password') {
                res.status(400).send('Wrong password');
            } else {
                console.error(error);
                res.status(400).send('Login failed');
            }
        } else {
            console.error(error);
            res.status(400).send('Login failed');
        }
    });
}

module.exports = { loginForm };