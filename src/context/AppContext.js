import React, { useState, createContext } from 'react';

const AppContext = createContext([{}, () => {}]);
const AppProvider = (props) => {
	const [state, setState] = useState({
        isOpen: false,
        loading: false,
        error: false,
        focused: false,
        email: '',
        password: '',
        confirmedPassword: '',
        isAuthenticated: false,
        user: {},
        userPromiseData: {},
        logo: require('../../assets/img/ssb-bg-logo.png'),
        weakPassword: 'Password must contain one digit, one lowercase character, one uppercase character, one special character, 6 characters in length, but no more than 16.',
        isWeakPassword: false,
        passwordError: 'Please make sure both passwords match.',
        isPasswordError: false,
        emailNotValid: 'Please enter a valid email address.',
        isEmailNotValid: false,
  });
  return (
    <AppContext.Provider value={ [state, setState] }>
      { props.children }
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };