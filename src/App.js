import React from 'react';
import RoutesPath from './Routes';
import 'bulma/css/bulma.min.css' 
import {Provider} from 'react-redux';
import store from "./Config/Store"
import { UserContextProvider } from './Context/userContext';



function App() {
  return (
  
    <Provider store={store}>
      <RoutesPath/>
      
    </Provider>
  
  );
}

export default App;
