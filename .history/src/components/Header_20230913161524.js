import React from "react";

export default function Header() {
  return (
    <div className="wrapper-header">
      <div className="img-bg">
        <img src="https://images.unsplash.com/photo-1682686581797-21ec383ead02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"></img>
      </div>
      <div className="header">
        <div className="header-logo">
          <img className="logo" src="./images/logo.png" alt="logo"></img>
        </div>
        <nav className="header-nav">
        <ul></ul>
        </nav>
      </div>
    </div>
  );
}
