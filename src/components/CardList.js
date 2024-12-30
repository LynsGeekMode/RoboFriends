import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

  // this is to force an error for ErrorBoundaries()
  if (false) {
    throw new Error('NOOOOOOOOOOOOOOOOO!')
  }

  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  })
  return (
    <div>
      {cardComponent}
    </div>
  )
}

export default CardList;