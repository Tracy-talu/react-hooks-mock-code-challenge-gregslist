import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App() {
  return (
    <div className="app">
      <Header />
      <ListingsContainer />
      <ListingCard/>
    </div>
  );
}

export default App;
