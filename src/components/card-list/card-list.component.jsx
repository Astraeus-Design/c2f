/*import { Component } from "react";*/

import "./card-list.styles.css";
import Card from "../card/card.component";

function CardList(props){

    const { monsters } = props;
    console.log('in the card list function');
    
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
}

export default CardList;
