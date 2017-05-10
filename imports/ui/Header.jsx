import React, { Component } from 'react';
import { Alert} from 'react-bootstrap'


export default class Header extends Component {
    render() {
        return (

            <header className="wrap">
                <div className="header-wrap">
                    <h4>Welcome "User Name"</h4>
                </div>
            </header>
        );
    }
}