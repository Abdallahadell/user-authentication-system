import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, CssBaseline } from '@mui/material';
import '../style/LoginComponent.css';
const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState({});
    const login = require('../services/login').loginForm;

    
    const setUserDataContainer = (data) => {
        setUserData(data);
        props.onLogin(data.displayName);
        clearForm();
    }
    const clearForm = () => {
        setErrorMessage('');
        setEmail('');
        setPassword('');
        setErrorMessage('');
    }



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        if (!email || !password) {
            setErrorMessage('Please enter both email and password');
            return;
        }


        login(email, password, setToken, setUserDataContainer, setErrorMessage);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <Typography component="h1" variant="h5">
                    Login Page
                </Typography>
                <form onSubmit={handleSubmit} className="form">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </Grid>
                    </Grid>
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                        Login
                    </Button>
                </form>
                {token ? (
                    <Typography variant="body2">Logged in and token is {token}</Typography>
                ) : (
                    <Typography variant="body2">Not logged in</Typography>
                )}
                {userData.displayName ? (
                    <Typography variant="body2">Welcome {userData.displayName}</Typography>
                ) : null}
            </div>
        </Container>
    );
};

export default LoginPage;
