import React from 'react';

const FunctionalWinsCounter = (props) => {
    return (
        <div>
            <h3>Player: {props.playerName}</h3>
            <h3>Rating: {props.rating}</h3>
            <h4>Number of wins: {props.winsNum}</h4>
            <h4>Number of losses: {props.lossesNum}</h4>
        </div>
    );
}

export default FunctionalWinsCounter;