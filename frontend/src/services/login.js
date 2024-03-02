import {loginApi} from '../api/login';
const loginForm = (email, password, setToken, setUserData, setErrorMessage) => {
    if(!email || !password){
        return false;
    }
    const data = {
        email,
        password
    }
    loginApi(data, setErrorMessage, setToken, setUserData);
}
export {loginForm};