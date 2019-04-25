import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="col s6 m4">
    <div className="card" onClick={() => props.handleIncrement(props.id)}>
      <div className="card-image">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
      </span>
    </div>
  </div>
);