import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteProvider from "./Routes/RouteProvider";

const App = () => {
  return (
    <Router>
      <RouteProvider />
    </Router>
  );
};

export default App;
