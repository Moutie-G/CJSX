import W2 from '.public/W2';
import { render } from '@testing-library/react';
import './App.css';

function App() {
  return (
  <div style= {{border:"1px",maxWidth:"10vw" }}>
    <h1 className="titleRed">Your name here</h1>
    <img src="W1/.png" alt="W1"/>
    <img src={W2} alt="W2"/>
    </div>
  <video style={{width:"320px" }} controls >
  <source src="./WildLife" type="video/wmv"/>
 </video>
  
  );
}

export default App;
