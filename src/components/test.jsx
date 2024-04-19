import React, { useState, useEffect, useRef } from 'react';
import Props from './props';

export const Test = ({table}) => {
 const [brands, setBrands] = useState([]);
 const [dialog_vis, setDialogVis] = useState(false);
 const input = useRef();

 const refresh = async () => {
  const body = new FormData();
  body.append("table_name",  table);
  const response = await fetch('http://localhost/carRenatl_React_Stuglik/api/fetch.php', {method: "POST", body});
  const data = await response.json();
  setBrands(data);
};
 
 useEffect(() => {
     refresh();
 }, [table]);

 const twojaMama = () => {
  setDialogVis(!dialog_vis);
 }
  const sendDaShit = () => {
    const fetchData = async () => {
      const body = new FormData();
      body.append("brand_name", input.current.value);
      const response = await fetch('http://localhost/carRenatl_React_Stuglik/api/add_brand.php', {method: "POST", body});
      const data = await response.json();
      console.log(data);
      refresh()
    };
    fetchData();
    setDialogVis(false)

  }

 
 return (<>

 {
  dialog_vis? 
  <dialog open={dialog_vis}> 
    <div><button onClick={() => twojaMama()}>X</button></div>
    <div>
      <input type="text" ref={input}/>
      <button onClick={sendDaShit}>Add</button>
    </div>
    
  </dialog> : <></>
  }
 <div className='test'>
        <p>jestem w comps</p>
        <button onClick={()=>twojaMama()}>Dodaj</button>
        {brands.map((brand, index) => (
          <Props props={brand} key={index}/>
        ))}
    </div>
    </>
    
 );
};

export default Test;