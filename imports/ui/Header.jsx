import React, { Component } from 'react';
import { Alert} from 'react-bootstrap'


export default class Header extends Component {
    render() {
        return (

            <header className="wrap">
                <div className="header-wrap">
                    <div className="user-info">
                        <h4>Welcome</h4>
                        <h4>Admin</h4>
                        <Alert> No info yet</Alert>
                    </div>
                </div>
            </header>
        );
    }
}