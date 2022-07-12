import React, { Component } from 'react';

class WelcomeMessage extends Component {
    render() {
        return (
            <h3>
                Welcome, {this.props.username}!
            </h3>
        );
    }
}

export default WelcomeMessage;