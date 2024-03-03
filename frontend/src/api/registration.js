import axios from 'axios';
const registrationApi = async (formData, setSubmitMsg) => {
    const BASE_API_URL = process.env.REACT_APP_API_BASE_URL || '';

    const json = JSON.stringify({
        displayName: formData.displayName,
        email: formData.email,
        password: formData.password,
    });
    
    try {
        const response = await axios.post(`${BASE_API_URL}/api/registration`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status >= 200 && response.status < 300) {
            setSubmitMsg('Registration successful');
            return true;
        }
         else {
            // Handle other error status codes
            console.error('Error:', response.statusText);
            //show a user-friendly message
            setSubmitMsg('Registration failed');
            return false;
        }
    } catch (error) {
        if(!!error.response && !!error.response.status){
            if(error.response.status === 401){
                setSubmitMsg('Email already in use');
            } else {
                console.error('Error:', error);
                setSubmitMsg('Registration failed');
            }
        }
        return false;
    // Handle the error, update state, or show a user-friendly message
    }
};
export { registrationApi };