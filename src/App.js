import React from "react";
import ReactDOM from "react-dom";

import Book from "./containers/Book";

// import Header from "./components/Header/Header";
// import ListBooks from "./components/ListBooks/ListBooks";
// import Footer from "./components/Footer/Footer";
// import Teste from "./components/Pagination/Teste";

function App() {
  return (    
    <Book />    
  );
}

ReactDOM.render(<App />, document.getElementById("app"));