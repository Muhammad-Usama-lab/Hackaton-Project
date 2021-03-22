// ----- internal imports 
import React from 'react';


import StackNav from './config/StackNavigator';
//import SplashScreen from './screens/SplashScreen.js'
//import Login from './screens/Login.js'
import { Provider } from 'react-redux';
import Store from './Store'
const App = () => {
  return (
    <Provider store={Store}>
      <StackNav />
    </Provider>
  )
};

export default App;
