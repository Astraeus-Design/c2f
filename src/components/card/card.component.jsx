/*import { Component } from "react";*/
import "./card.styles.css";

function Card(props){
  
    const { id, name, email } = props.monster;
    console.log('in the card function');
    
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster {${name}}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  
};

export default Card;
