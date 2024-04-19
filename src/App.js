import logo from './logo.svg';
import './App.css';
import { Test } from './components/test';
import React, { useState } from 'react';
import Props from './components/props';
import { Aumto } from './classes/Automo';
import tables from "./data/database_names.json";


function App() {
  const [table, setTable] = useState("");
  return (
    <>
    <div>
      {
        tables.map((t, ind)=>{
          return <div key={ind} onClick={()=>setTable(t)}>{t}</div>
        })
      }
    </div>
    {
      tables.includes(table) ? 
      <Test table={table} />: <></>
    }
    </>
  )
  
    
}

export default App;
