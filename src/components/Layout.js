import React from "react";

import Header from "./Header";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import Footer from "./Footer";

export default class Layout extends React.Component {    
  render() {
    return(
      <div>
        <Header />
        <SearchBooks />
        <ListBooks />
        <Footer />
      </div>
    );
  }
}