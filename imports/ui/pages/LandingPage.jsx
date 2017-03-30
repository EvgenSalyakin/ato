import React from "react";
import {
    Well,
    ButtonToolbar,
    Button,
    DropdownButton,
    MenuItem,
    Grid,
    Row,
    Col,
    Thumbnail,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Carousel,
    Gluphikon
} from "react-bootstrap";


export default class LandingPage extends React.Component {

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
                                                <DropdownButton id="bg-nested-dropdown" className="fa fa-bars" aria-hidden="true">
                                                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                                                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                                                </DropdownButton>
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
                                        <img src="/img/card.png" alt="social card..." className="card-ato"/>
                                    </Col>
                                </Row>
                            </div>
                            <div className="social-links-section">
                                <ul className="links-wrapper clearfix">
                                    <li className="link-item">
                                        <a href="" className="fa fa-vk" aria-hidden="true">
                                        </a>
                                    </li>
                                    <li className="link-item">
                                        <a href="" className="fa fa-facebook" aria-hidden="true">

                                        </a>
                                    </li>
                                    <li className="link-item">
                                        <a href="" className="fa fa-google-plus" aria-hidden="true">

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <Well>
                    Hello world!
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Name</ControlLabel>
                            {' '}
                            <FormControl type="text" placeholder="Jane Doe"/>
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Email</ControlLabel>
                            {' '}
                            <FormControl type="email" placeholder="jane.doe@example.com"/>
                        </FormGroup>
                        {' '}
                        <Button type="submit">
                            Send invitation
                        </Button>
                    </Form>
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
                            <MenuItem divider/>
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>

                    </ButtonToolbar>
                </Well>
                <section className="about_program">
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
                <section className="section-plus">
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
                <section className="partners-wrap">
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
                <footer>
                    Contact info
                </footer>
            </div>
        )
    }
}
