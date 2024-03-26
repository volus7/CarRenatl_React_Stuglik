import logo from './logo.svg';
import './App.css';
import { Test } from './components/test';
import React from 'react';
import Props from './components/props';
import { Aumto } from './classes/Automo';


function App() {
  // const array = [
  // new Aumto("Negrobus","super auto polecam 11/10", 5, "N","Makumba123"),
  //  new Aumto("Dorożka","Moc: 2 konie (nie) mechaniczne", 2, "śmierdzi koniem", "bmesdhvkb"),
  //  new Aumto("Auto Freda","styl retro", 4, "^_^", "barney_rubble"),
  //  new Aumto("Słoń bojowy","kto by nie chciał słonia bojowego", 5, "polecam", "Hannibal")  ]
  return (
    <>
    {/* {
      array.map(e => (<div className="car_card" key={e.name}>
      <div style={{"float":"left"}} className="car_info">


      </div>
      <div style={{"float":"left"}}>
      <h3>{e.name}</h3>
      <p>{e.desc}</p>
      <div style={{clear:"both"}}></div>
      <p><span className="stars">{"⭐".repeat(e.rating)}</span>   </p>
      <cite>{e.quote} ~ {e.quote_author}</cite>


      </div>
      <hr style={{clear:'both'}}/>



      </div>))
    }
    <hr />
     {
      array.map( autmo => <Props props={autmo} />)
     }
         <hr /> */}
      <Test />
    </>
  )
  
    
}

export default App;
