import React from 'react';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

const HomePage = () => {
    const [loggedInUser, setLoggedInUser] = React.useState(null);

    const getLoggedInUser = () => {
        // Get logged-in user from local storage
        const user = localStorage.getItem('loggedInUser');
        // Update state with logged-in user
        setLoggedInUser(user);
    }  
    React.useEffect(() => {
        getLoggedInUser();
    }, []);  
  const handleLogin = (user) => {
    // Update state with logged-in user
    // this.setState({ loggedInUser: user });
    setLoggedInUser(user);
    // Save logged-in user to local storage
    localStorage.setItem('loggedInUser', user);
  }

  const handleLogout = () => {
    // Clear logged-in user from state and local storage
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  }
    return (
      <div>
        {loggedInUser ? (
          <div>
            <h1>Welcome, {loggedInUser}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <LoginPage onLogin={handleLogin} />
            <RegistrationPage />
          </div>
        )}
      </div>
    );
}

export default HomePage;
