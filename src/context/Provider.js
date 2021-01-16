import React, {useState} from 'react';
import Context from './Context';

function Provider ({children}) {
  const [state, setState] = useState()
  
  const contextValue = {
    state, setState,
  }
  
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
