import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
//import { robots } from "./robots";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundaries from "../components/ErrorBoundaries";

function App() {

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
    console.log(count)
  }, [count]) // only run when count changes

  //this is a made up function
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

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
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <h2>Number of Clicks: {count}</h2>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundaries>
            <CardList robots={filteredRobots} />
          </ErrorBoundaries>
        </Scroll>
      </div>
    )
  }
}

export default App;