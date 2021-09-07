import React, { Component } from 'react';

class Child extends Component {
    componentWillUnmount() {
    // SUPER RARE case that you will use this
    // removing event listeners or setTimeouts
        console.log("hey you kelled me")
    }
    render() {
        return (
            <div>
                I AM ONLY CHILD
            </div>
        );
    }
}

export default Child;