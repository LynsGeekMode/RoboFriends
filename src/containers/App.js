import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
//import { robots } from "./robots";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundaries from "../components/ErrorBoundaries";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) })
  }

  //this is a made up function
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    /* Steps: 
      1. Execute the SearchBox().
        - if a change was detected, then this.onSearchChange will be updated
          -- onChange={searchChange}
      2. filteredRobots will be executed:
        - change the input type to LowerCase
        - compare by checking if it includes()
      3. Update the CardList with the filteredRobots
    */

    if (!robots.length) {
      return <h1 className="tc">MAGHINTAY KA!</h1>
    } else {
      return (
        <div className="tc" >
          <h1 className='F1'> RoboFriends </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundaries>
              <CardList robots={filteredRobots} />
            </ErrorBoundaries>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;