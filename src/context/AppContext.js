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
        isAuthenticated: false,
        user: {},
        userPromiseData: {},
        logo: require('../../assets/img/ssb-bg-logo.png'),
  });
  return (
    <AppContext.Provider value={ [state, setState] }>
      { props.children }
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };