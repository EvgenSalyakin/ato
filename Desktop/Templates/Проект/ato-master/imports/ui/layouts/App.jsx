import React from 'react';

export default class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="app">
                    {this.props.main}
                </div>
            </div>
        );
    }

}