import React, { Component } from 'react';
import {Tracker} from 'meteor/tracker';
import {compose} from 'react-komposer';
//import {AccountsUIWrapper} from './AccountsUIWrapper';
import { Accounts } from 'meteor/std:accounts-ui';
//import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Well, ButtonToolbar, Button, DropdownButton, MenuItem, Grid,
    Row, Col, Thumbnail, Form, FormGroup, FormControl, ControlLabel, Carousel, Gluphikon } from "react-bootstrap";
import MapComponent from '../component/MapComponent'

Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY',
    loginPath: '/',
    // onSignedInHook: () => FlowRouter.go('/'),
    // onSignedOutHook: () => FlowRouter.go('/')
});

Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY',
    loginPath: '/',
});

class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdown: ''
        };

        this.dropdownShow = this.dropdownShow.bind(this);
       // this.dropdownHide = this.dropdownHide.bind(this);
    }

    dropdownShow() {
        if (!this.state.dropdown) {
            this.setState({dropdown: 'show'});
        } else {
            this.setState({dropdown: ''});
        }
    }

    // dropdownHide() {
    //     this.setState({dropdown: ''});
    // }

    render() {
        return (
            <div className="landing-page">
                <header>
                    <div className="wrap">
                        <div>
                            <div className="menu-section clearfix">
                                <div className="menu-wrap">
                                    <nav>
                                        <ul className="clearfix">
                                            <li className="menu-item">
                                                <a href="#" className="fa fa-search" aria-hidden="true">

                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#" className="fa fa-envelope-o" aria-hidden="true">

                                                </a>
                                            </li>
                                            <li className="menu-item profile">
                                                <a href="#" className="profile-face">

                                                </a>
                                            </li>

                                            <li className="menu-item">

                                                <Button
                                                    id="bg-nested-dropdown"
                                                    className="fa fa-bars"
                                                    aria-hidden="true"
                                                    title=""
                                                    onClick={this.dropdownShow} />
                                                <div className={this.state.dropdown}>
                                                    <Accounts.ui.LoginForm />
                                                </div>
                                                {/*<Accounts.ui.LoginForm />*/}
                                                {/*<AccountsUIWrapper/>*/}
                                                {/*<DropdownButton id="bg-nested-dropdown" className="fa fa-bars"*/}
                                                                {/*aria-hidden="true" title="">*/}
                                                    {/*<Accounts.ui.LoginForm />*/}
                                                    {/*<MenuItem header eventKey="1"><Accounts.ui.LoginForm /></MenuItem>*/}
                                                    {/*<MenuItem eventKey="2">Dropdown link</MenuItem>*/}
                                                {/*</DropdownButton>*/}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="social-card-section">
                                <Row>
                                    <Col xs={12} md={7}>
                                        <h1>
                                            Соціальна картка<br />
                                            учасника<br />
                                            АТО
                                        </h1>
                                    </Col>
                                    <Col xs={12} md={5} className="card-wrapper">
                                        <img src="/img/ato-logo.png" alt="social card..." className="card-ato"/>
                                    </Col>
                                </Row>
                            </div>
                            <div className="social-links-section">
                                <ul className="links-wrapper clearfix">
                                    <li className="link-item">
                                        <a href="javascript:void(0)" className="fa fa-vk" aria-hidden="true"> </a>
                                    </li>
                                    <li className="link-item">
                                        <a href="https://www.facebook.com/groups/kartkaato/" className="fa fa-facebook" aria-hidden="true"> </a>
                                    </li>
                                    <li className="link-item">
                                        <a href="javascript:void(0)" className="fa fa-google-plus" aria-hidden="true"> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="about_program" id="about-program">
                    <div>
                        <h3 className="section_title about_title">
                            Про програму
                        </h3>
                        <div className="about_program_description">
                            Соціальна програма — комплекс узгоджених заходів за цілями, строками, ресурсами та
                            виконавцями
                            у масштабах визначеної території та галузі соціальної сфери, що спрямовані на вирішення
                            комплексу
                            соціальних проблем.
                            Як правило, соціальний та соціально-економічний ефект соціальних програм виражається в
                            підвищенні
                            якості життя громадян і суспільства в цілому.
                        </div>
                    </div>
                </section>
                <section className="section-plus" id="plus">
                    <div className="wrap">
                        <h3 className="section_title">
                            Переваги
                        </h3>
                        <Row>
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <div className="item_plus">
                                    <img src="/img/stopwatch.png" alt="Stop watch"/>
                                    <h3 className="item_plus_title">Швидко</h3>
                                    <div className="item_plus_description">
                                        Швидкість — фізична величина, що
                                        відповідає відношенню переміщення
                                        тіла до проміжку часу, за який
                                        це переміщення відбувалось
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <div className="item_plus">
                                    <img src="/img/success.png" alt="Stop watch"/>
                                    <h3 className="item_plus_title">Якісно</h3>
                                    <div className="item_plus_description">
                                        Якість — філософське поняття, з термінології
                                        гуманітарних наук. ... якість це — побічна
                                        обставина, за допомогою якої річ є
                                        якогось типу чи виду
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <div className="item_plus">
                                    <img src="/img/no_line.png" alt="No line" className="marg-img"/>
                                    <h3 className="item_plus_title">Без черг</h3>
                                    <div className="item_plus_description">
                                        Черга (англ. queue) в програмуванні
                                        динамічна структура даних, що працює
                                        за принципом ... Елемент, що додається
                                        до черги, опиняється в її хвості.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="partners-wrap" id="partners">
                    <div className="wrap">
                        <h3 className="section_title section_title--color">
                            Партнери
                        </h3>
                        <div className="wrap_logo_partner">
                            <Carousel>
                                <Carousel.Item>
                                    <img alt="valor" src="/img/valor-wings.png"/>
                                    <img alt="ibm" src="/img/ibm.png"/>
                                    <img alt="red" src="/img/red.png"/>
                                    <img alt="band" src="/img/band.png"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="valor" src="/img/valor-wings.png"/>
                                    <img alt="ibm" src="/img/ibm.png"/>
                                    <img alt="red" src="/img/red.png"/>
                                    <img alt="band" src="/img/band.png"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="valor" src="/img/valor-wings.png"/>
                                    <img alt="ibm" src="/img/ibm.png"/>
                                    <img alt="red" src="/img/red.png"/>
                                    <img alt="band" src="/img/band.png"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </section>

                <section className="map-page">
                    <aside>
                        <ul className="map-navigation">
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 10% - парк імені 30-річчя Перемоги</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 5% - парк Хіміків</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 15% - парк Соборний</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 10% - парк імені 30-річчя Перемоги</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 5% - парк Хіміків</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 15% - парк Соборний</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 10% - парк імені 30-річчя Перемоги</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 5% - парк Хіміків</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 15% - парк Соборний</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 10% - парк імені 30-річчя Перемоги</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 5% - парк Хіміків</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 15% - парк Соборний</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 10% - парк імені 30-річчя Перемоги</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 5% - парк Хіміків</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img alt="band" src="/img/branding.png"/>
                                    <span>знижка 15% - парк Соборний</span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <div className="map-block">
                        <MapComponent markers={this.props.data} />
                    </div>
                </section>

                <footer className="footer">
                    <div className="wrap">
                        <div className="footer-content">
                            <ul className="footer-menu">
                                <li className="item-menu">
                                    <a href="#about-program">Про програму </a>
                                </li>
                                <li className="item-menu">
                                    <a href="#plus">Переваги</a>
                                </li>
                                <li className="item-menu">
                                    <a href="#partners">Партнери</a>
                                </li>
                            </ul>
                            <div className="social-links-section social-links-footer">
                                <ul className="links-wrapper clearfix">
                                    <li className="link-item">
                                        <a href="javascript:void(0)" className="fa fa-vk fa--color" aria-hidden="true"> </a>
                                    </li>
                                    <li className="link-item">
                                        <a href="https://www.facebook.com/groups/kartkaato/" className="fa fa-facebook fa--color" aria-hidden="true"> </a>
                                    </li>
                                    <li className="link-item">
                                        <a href="javascript:void(0)" className="fa fa-google-plus fa--color" aria-hidden="true"> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

function getTrackerLoader(reactiveMapper) {
    return (props, onData, env) => {
        let trackerCleanup = null;
        const handler = Tracker.nonreactive(() => {
            return Tracker.autorun(() => {
                // assign the custom clean-up function.
                trackerCleanup = reactiveMapper(props, onData, env);
            });
        });

        return () => {
            if (typeof trackerCleanup === 'function') trackerCleanup();
            return handler.stop();
        };
    };
}

function reactiveMapper(props, onData) {

    // let data = {};
    // onData(null, {data});
    Meteor.call('getLocationsFromJSON', (err, data) => {
        if (err) {
            throw new Meteor.Error('error');
        } else {
            onData(null, {data});
        }
    });
}

export default compose(getTrackerLoader(reactiveMapper))(LandingPage);
