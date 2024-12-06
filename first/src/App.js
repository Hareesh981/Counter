import { useState } from "react";


function App() {
  const [counter,setCounter]=useState(0)
  const handle=()=>{
    setCounter(counter+1)
  }
  const handleDecrement=()=>{
    setCounter(counter-1)
  }
  return (
    <div>
<button onClick={handle}>
  
  increment
</button>
<button onClick={handleDecrement}>Decrement</button>
<h1>{counter}

</h1>
    </div>
      
   
  );
}

export default App;
