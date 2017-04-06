import React from 'react';

export default class AppLanding extends React.Component {

    render() {
        return (
            <div className="wrapper-landing">
                <div className="app-landing">
                    {this.props.main}
                </div>
            </div>
        );
    }

}