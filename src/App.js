import React, { useState } from 'react';
import './App.css';
import q from '../src/img/04.05.jpg'
import w from '../src/img/nophotoshop29-800x532.jpg'
function App() {
  let [img, image] = useState(q)
  return (
    <div className="App">
    {/* <div>
    <h1>{hello}</h1>
    
    <button onClick={()=>setBir('hello')}>+</button>
    <button onClick={()=>setBir('text')}>+</button>
    </div> */}
  
  <div>
  <img src={q} width={100} height={60}/>
  <img src={w} width={100} height={60}/>
  
  </div>
  <div><img src={img}/></div>
    <div className='btn'>
    <button onClick={()=>image(q)}>1foto</button>
    <button onClick={()=>image(w)}>2foto</button>
    
    </div>
    <div className='foto'>
    <img onClick={()=>image(q)} src={q} width={40}/>
    <img onClick={()=>image(w)} src={w} width={40}/>
    </div>
    </div>
  );
}

export default App;
