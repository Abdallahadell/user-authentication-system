import axios from 'axios';
const loginApi =  (data, setErrorMessage, setToken, setUserData) => {
    try {
        const BASE_API_URL = process.env.REACT_APP_API_BASE_URL || '';
        const email = data.email;
        const password = data.password;
        axios.post( `${BASE_API_URL}/api/login`, {
            email,
            password
        }).then((response) => {
            setUserData(response.data.userData);
            setToken(response.data.token);
            setErrorMessage('');
            return true;
        }).catch((error) => {
            setToken('');
            setUserData({});
            if(!!error.response && !!error.response.status){
                if(error.response.status === 400){
                    setErrorMessage('Invalid email or password');
                } else if(error.response.status === 401){
                    setErrorMessage('Email not verified');
                }
            } else {
                console.error(error);
                setErrorMessage('Login failed');
            }
            return false;
        });
    } catch (error) {
        setErrorMessage('Login failed');
        setToken('');
        setUserData({});
        console.error(error);
        return false;
    }
};

export { loginApi };