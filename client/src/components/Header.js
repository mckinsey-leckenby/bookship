import React from "react";
import { Link } from "react-router-dom";
import bookshiplogo from './bookship-logo.png';




function Header() {
  return (
    <div id="book-header">

      <img
        src={bookshiplogo}
         alt="book header" 
      
     />
    
      
    </div>
  );
}

export default Header;