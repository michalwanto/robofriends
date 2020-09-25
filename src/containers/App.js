import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { changeSearchField, fetchRobots } from "./actions";
import Scroll from "../components/Scroll";

import Header from "../components/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    this.props.fetchRobots();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const {
      robots,
      error,
      isPending,
      searchField,
      onSearchChange,
    } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchField: state.searchFieldReducer.searchField,
    isPending: state.fetchRobotsReducer.isPending,
    robots: state.fetchRobotsReducer.robots,
    error: state.fetchRobotsReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
    fetchRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
