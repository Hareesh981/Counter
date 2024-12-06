import { useState } from "react";


function App() {
  const [counter,setCounter]=useState(0)
  const handle=()=>{
    setCounter(counter+1)
  }
  return (
    <div>
<button onClick={handle}>
  
  increment
</button>
<h1>{counter}

</h1>
    </div>
      
   
  );
}

export default App;
