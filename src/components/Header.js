import React from "react";
import "./Header.css";
import CountButton from "./CountButton";

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log("Header");
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>;
        <CountButton color="red" />
      </div>
    );
  }
}

export default Header;
