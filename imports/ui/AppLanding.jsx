import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


export default class AppLanding extends React.Component {

    render() {
        return (
            <div className="wrapper-landing">
                <div className="app-landing">
                <AccountsUIWrapper/>
                    {this.props.main}
                </div>
            </div>
        );
    }

}
