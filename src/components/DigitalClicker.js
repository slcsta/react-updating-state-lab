// Code DigitalClicker Component Here
import React, { Component } from 'react' 

export default class DigitalClicker extends Component {

    // initial state property
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }


    render() {
        return (
            <button
                onClick={this.handleClick}>
                {this.state.timesClicked}
            </button>
        )
    }
}