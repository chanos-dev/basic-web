import './App.css';
import React, { useState, useContext, createContext } from 'react';
import useStateContext, { stateContext, ContextProvider } from './component/Test';

const themeDefault = { border: '10px solid green' }
const themeContext = createContext(themeDefault);

function App() {
  const theme = useContext(themeContext);
  return (
    <div className="root" style={theme}>
      <h1>hello</h1>
      <Sub1 />
    </div>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: '10px solid red' }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <ContextProvider>
      <div style={theme}>
        <h1>Sub2</h1>
        <Sub3 />
      </div>
    </ContextProvider>
  );
}

function Boo(obj) {
  const foo = {
    value1: 'TEST1'
  };

  console.log(obj);
  console.log({ ...obj });

  console.log(foo);

  console.log({ ...foo, obj });
  console.log({ ...foo, ...obj });
}

function Sub3() {
  const theme = useContext(themeContext);
  const { context, setContext } = useStateContext();

  return (
    <div style={theme}>
      <h1>Sub3</h1>

      <button onClick={() => {
        const obj = {
          value1: 'TESTTEST!!'
        }
        setContext(obj);
        Boo(obj);
      }}>test2</button>
    </div>
  );
}

export default App;
