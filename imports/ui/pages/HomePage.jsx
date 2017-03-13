import React from 'react';
import { Well } from 'react-bootstrap'

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
            </div>
        )
    }
}
