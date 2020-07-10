import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './Components/Counter'
import counterReducer from './Reducers/counterReducer'
import Form from './Components/Form'

const store = createStore(counterReducer)

function App() {
    
  return (
    
    <Provider store={store}>  
       
        <Counter />
        <Form /> 
    </Provider>
  );
}

export default App;
