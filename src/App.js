import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import ListBooks from "./components/ListBooks/ListBooks";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />            
      <ListBooks />      
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));