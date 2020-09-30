import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>            
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
    </Router>
  );
}
export default App;
