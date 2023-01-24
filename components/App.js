import './App.css';
import React, {useState} from 'react';
import Authorition from './Authorition';

function App() {
  const [login, setLogin]= useState('True')
  return <div>
      <h1>Практическая работа</h1>
      {login?<Authorition/>:''}
    </div>
  ;
}

export default App;
