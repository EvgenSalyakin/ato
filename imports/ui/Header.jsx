import React, { Component } from 'react';
import { Alert} from 'react-bootstrap'


export default class Header extends Component {
    render() {
        return (

            <header className="wrap">
                <div className="header-wrap">
                    <div className="user-info">
                        <h4>Welcome Admin</h4>
                    </div>
                </div>
            </header>
        );
    }
}