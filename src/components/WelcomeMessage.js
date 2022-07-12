import React, { Component } from 'react';

class WelcomeMessage extends Component {
    render() {
        console.log(this.props)
        if (this.props.username === 'Flash') {
            return <h2>OMG! It's the {this.props.username}</h2>
        } else {
            return <h3>Welcome, {this.props.username}</h3>
        }
        );
    }
}

export default WelcomeMessage;