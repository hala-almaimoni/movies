import React, { Component } from 'react';
import { link } from 'fs';


class Cast extends Component {
    render() {
        return (
            <li>{this.props.actor.name}: {this.props.actor.role}</li>
        );
    }
}
export default Cast;