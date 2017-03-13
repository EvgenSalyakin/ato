import React, { Component } from 'react';

export default class Aside extends Component {

    render() {
        return (
            <div className="sidebar-container">
                <aside className="panel1 nav">
                    <ul className="navigation">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/catalog">Catalog</a>
                        </li>
                        <li>
                            <a href="/analytics">Analytics</a>
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