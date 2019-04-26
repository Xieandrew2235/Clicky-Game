import React, { Component } from "react";
import "./FriendCard.css";

class FriendCard extends Component {
    state = {
        clicked: false
    };

    onClick = () => {
        if (this.state.clicked === false) {
            this.props.handleIncrement();
            this.setState({ clicked: true });
        }
        else if (this.state.clicked === true) {
            this.props.handleReset();
        }
    };

    render() {
            return (
                <div className="card" onClick={this.onClick}>
                    <div className="img-container">
                        <img alt={this.props.name} src={this.props.image} />
                    </div>
                </div>
            );
        }
    }


    export default FriendCard
