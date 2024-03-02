import {loginApi} from '../api/login';
const loginForm = (email, password, setToken, setUserData, setErrorMessage) => {
    if(!email || !password){
        return false;
    }
    const data = {
        email,
        password
    }
    const responseState = loginApi(data, setErrorMessage, setToken, setUserData);
    return responseState;

}
export {loginForm};