import React from "react";

class CountButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  upgradeCount = () => {
    console.log("got clicked");
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    console.log("CountButton");
    return (
      <button color={this.props.color} onClick={this.upgradeCount}>
        Count {this.state.count}
      </button>
    );
  }
}

export default CountButton;
