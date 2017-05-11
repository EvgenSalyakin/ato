import React, { Component } from 'react';

export default class Aside extends Component {

    render() {
        return (
            <div className="sidebar-container">
                <aside className="panel1 nav">
                    <ul className="navigation">
                        <li>
                            <a href="/admin-users">Users</a>
                        </li>
                        <li>
                            <a href="/admin-cards">Cards</a>
                        </li>
                        <li>
                            <a href="/admin-outlets">Outlets</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}