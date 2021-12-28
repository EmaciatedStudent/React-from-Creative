import { React, Component, useState} from 'react';

class ClassWinsCounter extends Component {
    render() {
        return (
            <div>
                <h3>Player: {this.props.playerName}</h3>
                <h3>Rating: {this.props.rating}</h3>
                <h4>Number of wins: {this.props.winsNum}</h4>
                <h4>Number of losses: {this.props.lossesNum}</h4>
            </div>
        );
    }
}

export default ClassWinsCounter;