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
        // Check for success (2xx status codes)
        if (response.status >= 200 && response.status < 300) {
            setSubmitMsg('Registration successful');
            return true;
        } else if (response.status === 400) {
            // Handle specific error for 400 Bad Request
            const errorData = response.data; // Assuming the error details are in JSON format
            console.error('Bad Request:', errorData);
            setSubmitMsg('Registration failed');
            return false;
            // Handle the error, update state, or show a user-friendly message
        } else {
            // Handle other error status codes
            console.error('Error:', response.statusText);
            //show a user-friendly message
            setSubmitMsg('Registration failed');
            return false;
        }
    } catch (error) {
        console.error('Error:', error.message);
        setSubmitMsg('Registration failed');
        return false;
    // Handle the error, update state, or show a user-friendly message
    }
};
export { registrationApi };