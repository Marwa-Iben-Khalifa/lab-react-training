import React from 'react';
import IdCard from './card/Idcard'
import './App.css';


function App() {
  return (
    <div>
      <IdCard lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores '
        firstName='Obrien'
        gender='female'
        height="172"
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
    </div>
  );
}

export default App;
