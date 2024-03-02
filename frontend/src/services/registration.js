import {registrationApi} from '../api/registration';
const registrationForm = async (email, password, displayName, setSubmitMsg) => {
    if(!email || !password || !displayName){
        return false;
    }
    const formData = {
        email,
        password,
        displayName
    }
    const responseState = await registrationApi(formData, setSubmitMsg);
    return responseState;

}
export {registrationForm};