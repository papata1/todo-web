import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-40">
        <Header  title="MAQE Forum"/>
        <Body />
      </div>
    </div>
  );
}

export default App;
