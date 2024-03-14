import logo from './logo.svg';
import './App.css';

class Aumto  {
  constructor(name, descriptiomn, img, rating, quote, quote_author) {
    this.rating = rating;
    this.name = name;
    this.desc = descriptiomn;
    this.img = img
    this.quote  = quote;
    this.quote_author  = quote_author;
  }
}


function App() {
  const array = [
  new Aumto("Negrobus","super auto polecam 11/10", "negrobus",5, "N","Makumba123"),
   new Aumto("Dorożka","Moc: 2 konie (nie) mechaniczne", "konie",2, "śmierdzi koniem", "bmesdhvkb"),
   new Aumto("Auto Freda","styl retro", "flintstone",4, "^_^", "barney_rubble"),
   new Aumto("Słoń bojowy","kto by nie chciał słonia bojowego", "elephant",5, "polecam", "Hannibal")  ]
  return (

      array.map(e => (<div className="car_card" key={e.name}>
               <div style={{"float":"left"}} className="car_info">
            <img style={{"width":"250px", "height":"200px"}} src={require("./"+ e.img + ".png")}></img>
  
        </div>
        <div style={{"float":"left"}}>
        <h3>{e.name}</h3>
        <p>{e.desc}</p>
        <div style={{clear:"both"}}></div>
        <p >         <span className="stars">{"⭐".repeat(e.rating)}</span>   </p>
       <cite>{e.quote} ~ {e.quote_author}</cite>

 
        </div>
        <hr style={{clear:'both'}}/>
 
      
    
      </div>))
    

  )
  
    
}

export default App;
