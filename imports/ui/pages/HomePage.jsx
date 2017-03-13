import React from 'react';
import { Well, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap'

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="page home">
                <header>
                    <h2><i className="fa fa-building-o" aria-hidden="true"> </i> Home</h2>
                </header>
                <Well>
                    Hello world!
                </Well>

                <Well>
                    <ButtonToolbar>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                        <Button bsStyle="primary">Primary</Button>

                        {/* Indicates a successful or positive action */}
                        <Button bsStyle="success">Success</Button>

                        {/* Contextual button for informational alert messages */}
                        <Button bsStyle="info">Info</Button>

                        {/* Indicates caution should be taken with this action */}
                        <Button bsStyle="warning">Warning</Button>

                        {/* Indicates a dangerous or potentially negative action */}
                        <Button bsStyle="danger">Danger</Button>

                        <DropdownButton bsStyle="primary" title="Dropup" key={1} id="asd">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3" active>Active Item</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>

                    </ButtonToolbar>
                </Well>
            </div>
        )
    }
}
