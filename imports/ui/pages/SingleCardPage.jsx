import React from 'react';
import { Well, ButtonToolbar, Button, DropdownButton, MenuItem, Grid, Row, Col, Thumbnail, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class SingleCardPage extends React.Component {

    render() {
        return (
            <div className="landing-page">
                <header>
                    <h2>Card 3456783</h2>
                </header>

                <Well>
                    <Grid>
                        <Row>
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
                    </Grid>
                </Well>
            </div>
        )
    }
}
