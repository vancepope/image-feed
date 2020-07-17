import React, { useState, createContext } from 'react';
import firebase from 'firebase';
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
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };