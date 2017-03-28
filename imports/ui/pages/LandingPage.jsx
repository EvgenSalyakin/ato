import React from 'react';
import { Well, ButtonToolbar, Button, DropdownButton, MenuItem, Grid, Row, Col, Thumbnail, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing-page">
                <header>
                    <h2><i className="fa fa-building-o" aria-hidden="true"> </i> Landing page</h2>
                </header>
                <Well>
                    Hello world!
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Name</ControlLabel>
                            {' '}
                            <FormControl type="text" placeholder="Jane Doe" />
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Email</ControlLabel>
                            {' '}
                            <FormControl type="email" placeholder="jane.doe@example.com" />
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
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>

                    </ButtonToolbar>
                </Well>

                <section className="section-plus">
                    <div className="wrap">
                        <h3 className="section-title">
                            Переваги
                        </h3>
                        <Row>
                            <Col xs={6} md={4} lg={4}>
                                <Thumbnail src="/img/img-test.png" alt="242x200">
                                    <h3>Thumbnail label</h3>
                                    <p>Description</p>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src="/img/img-test.png" alt="242x200">
                                    <h3>Thumbnail label</h3>
                                    <p>Description</p>
                                    <p>
                                        <Button bsStyle="primary">Button</Button>&nbsp;
                                        <Button bsStyle="default">Button</Button>
                                    </p>
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src="/img/img-test.png" alt="242x200">
                                    <h3>Thumbnail label</h3>
                                    <p>Description</p>
                                    <p>
                                        <Button bsStyle="primary">Button</Button>&nbsp;
                                        <Button bsStyle="default">Button</Button>
                                    </p>
                                </Thumbnail>
                            </Col>
                        </Row>
                    </div>
                </section>

                <footer>
                    Contact info
                </footer>
            </div>
        )
    }
}
