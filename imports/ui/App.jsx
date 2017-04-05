import React from 'react';
import Aside from './Aside';
import Header from './Header';

export default class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Aside />
                <div className="app">
                    {this.props.main}
                </div>
            </div>
        );
    }

}