/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [titles, titleChange] = useState(['아름다운', '인생', '반갑소이다', '김치볶음밥 좋은 이유']); 

  function sortTitles(mode) {
    let newTitles = [...titles];

    if (mode === 'asc') {
      newTitles.sort();
    } else {
      newTitles.sort((a,b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
      });
    }
    titleChange(newTitles);
  }

  let writes = [];
  let date = new Date();
  for(let idx=0; idx<titles.length; idx++) {    
    const write = <Write key={"title"+idx} data={titles[idx]} date={date.toLocaleString()}></Write>    
    date.setDate(date.getDate() + 1);
    writes.push(write);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Study</div>        
      </div>           
      <div className="buttons">
          <button onClick={ () => {sortTitles('asc') }}>오름차순</button>
          <button onClick={ () => {sortTitles('desc') }}>내림차순</button>
      </div>    
      {writes}     
    </div>
  );
}

function Write(props) {
  let [count, countChange] = useState(0);

  return (
    <div className="list">
        <h3>{props.data} <span onClick={() => {
          countChange(count+1);
        }}>🎉</span> {count}</h3>
        <p>{props.date}</p>        
        <hr/>
      </div>       
  );
}

export default App;
