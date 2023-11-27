import React from "react";
import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";


function App() {
  
  return (
    <div>
      
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;