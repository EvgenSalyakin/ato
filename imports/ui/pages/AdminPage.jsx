import React from 'react';
import { Well, Image, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap'

export default class AdminPage extends React.Component {
    constructor(props){
        super(props);

        console.log('Admin page');
    }

    render() {
        return (
            <div className="page admin">
                <header>
                    <h2><i className="fa fa-user-o" aria-hidden="true"> </i> Admin</h2>
                </header>

                <Well>

                </Well>
            </div>
        )
    }
}
