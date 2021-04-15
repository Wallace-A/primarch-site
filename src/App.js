import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import CharacterGrid from "./components/CharacterGrid"
import "./App.css";
import * as primarchs from "./data/primarchs.json";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(primarchs);
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Header/>
      <CharacterGrid 
      isLoading={isLoading}
      primarchs={primarchs}
      />
    </div>
  );
}

export default App;
