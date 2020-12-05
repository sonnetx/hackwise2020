import React from "react";
import "../App.css";
import Logo from "../img/Logo.jpg";

const Header = () => {
  // different buttons should be visible in header
  // when we are logged in and when we aren't

  // use axios library to send request to server
  // use json-server library to simulate having data on the server
  const handleLoginClick = () => {
    console.log("this button handles logging in");
  };
  // more handlers to add...
  return (
    <div id="Header">
      <img src={Logo} alt={`Simon's Cat`} />
      <div id="HeaderText">
        <b>Hubby the Cat</b>
      </div>
      <div class="indicators">
        <p id="firstIndicator">Hunger Level 85%</p>
        <p id="secondIndicator">Happiness Level 85%</p>
        <p id="thirdIndicator">Hygiene Level 85%</p>
      </div>
      <button
        onClick={() => console.log("...")}
        className="HeaderButton"
        id="SignUpButton"
      >
        Sign up
      </button>

      <button
        onClick={() => console.log("...")}
        className="HeaderButton"
        id="LogoutButton"
      >
        Logout
      </button>

      <button
        onClick={handleLoginClick}
        className="HeaderButton"
        id="LoginButton"
      >
        Login
      </button>
    </div>
  );
};

export default Header;
