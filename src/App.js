import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

const [flowers, setflowers] = useState(data);

const removeFlower = (id) => {
  let newFlowers = flowers.filter(flower => flower.id !== id );
  setflowers(newFlowers);
} 

return (
<div>
<div className="container"> 
<h1> {flowers.length} Roses Bouquets </h1>
</div>

{flowers.map((element => {
const{id, flower, image} = element;
  
return(<div key={id}>
<div className="container">
<h2> {flower} - {id} -  </h2>
</div>

<div className="container">
<img src={image} width="330px" height="370" />
</div>

<div className="container">
<button onClick={() => removeFlower(id)}>Remove</button>
</div>
</div>)
 }))}

<div className="container"> 

<button onClick={() => setflowers([])}>Delete All</button>
</div>
</div>
)
}

export default App;
