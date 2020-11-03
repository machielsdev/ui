import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Button, Card, Col, Grid, Icon, Page, Row, Variant } from '../../src';
import Container from '../../src/components/Container/Container';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Card className="mb-4">
                <Card.Header title="Buttons" />
                <Card.Content>
                    <Grid columns={7} gap={4}>
                        <div>
                            <Button variant={Variant.PRIMARY}>Primary</Button>
                        </div>
                        <div>
                            <Button variant={Variant.SECONDARY}>Secondary</Button>
                        </div>
                        <div>
                            <Button variant={Variant.DANGER}>Danger</Button>
                        </div>
                        <div>
                            <Button variant={Variant.PRIMARY_GHOST}>Primary ghost</Button>
                        </div>
                        <div>
                            <Button variant={Variant.DANGER_GHOST}>Danger ghost</Button>
                        </div>
                        <div>
                            <Button variant={Variant.PRIMARY} iconLeft={<Icon icon="home" />}>Icon left</Button>
                        </div>
                        <div>
                            <Button variant={Variant.PRIMARY} iconRight={<Icon icon="user" />}>Icon right</Button>
                        </div>
                    </Grid>
                </Card.Content>
            </Card>
            <Card className="mb-4">
                <Card.Header title="Grid" />
                <Card.Content>
                    <Container fluid>
                        <Row className="mb-4">
                            <Col className="py-4 background-primary-light">Col 1/1</Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="py-4 background-primary-light">Col 1/2</Col>
                            <Col className="py-4 background-primary-light">Col 2/2</Col>
                        </Row>

                        <Row className="mb-4">
                            <Col className="py-4 background-primary-light">Col 1/3</Col>
                            <Col className="py-4 background-primary-light">Col 2/3</Col>
                            <Col className="py-4 background-primary-light">Col 3/4</Col>
                        </Row>

                        <Row className="mb-4">
                            <Col className="py-4 background-primary-light">Col 1/3</Col>
                            <Col className="py-4 background-primary-light">Col 2/3</Col>
                            <Col className="py-4 background-primary-light">Col 3/4</Col>
                        </Row>

                        <Row className="mb-4">
                            <Col className="py-4 background-primary-light">Col 1/4</Col>
                            <Col className="py-4 background-primary-light">Col 2/4</Col>
                            <Col className="py-4 background-primary-light">Col 3/4</Col>
                            <Col className="py-4 background-primary-light">Col 4/4</Col>
                        </Row>
                    </Container>
                </Card.Content>
            </Card>
            <Grid columns={12} gap={4}>
                <Card>
                    <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                        <div className="card-header-title mb-2">Activity</div>
                        <Icon icon="activity" className="cui-icon-size-12" />
                    </Card.Content>
                </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Alert circle</div>
                    <Icon icon="alert-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Alert triangle</div>
                    <Icon icon="alert-triangle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Archive</div>
                    <Icon icon="archive" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow left</div>
                    <Icon icon="arrow-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow circle down</div>
                    <Icon icon="arrow-circle-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow circle left</div>
                    <Icon icon="arrow-circle-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow circle right</div>
                    <Icon icon="arrow-circle-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow circle up</div>
                    <Icon icon="arrow-circle-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sort down</div>
                    <Icon icon="sort-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sort down</div>
                    <Icon icon="arrow-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow right</div>
                    <Icon icon="arrow-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow alt left</div>
                    <Icon icon="arrow-alt-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow alt down</div>
                    <Icon icon="arrow-alt-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow alt right</div>
                    <Icon icon="arrow-alt-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow alt up</div>
                    <Icon icon="arrow-alt-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sort left</div>
                    <Icon icon="sort-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sort right</div>
                    <Icon icon="sort-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sort up</div>
                    <Icon icon="sort-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrow up</div>
                    <Icon icon="arrow-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrowhead down</div>
                    <Icon icon="arrowhead-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrowhead left</div>
                    <Icon icon="arrowhead-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrowhead right</div>
                    <Icon icon="arrowhead-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Arrowhead up</div>
                    <Icon icon="arrowhead-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">At</div>
                    <Icon icon="at" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Attach 2</div>
                    <Icon icon="attach-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Attach</div>
                    <Icon icon="attach" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Award</div>
                    <Icon icon="award" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Backspace</div>
                    <Icon icon="backspace" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bar chart 2</div>
                    <Icon icon="bar-chart-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bar chart</div>
                    <Icon icon="bar-chart" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Battery</div>
                    <Icon icon="battery" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Behance</div>
                    <Icon icon="behance" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bell off</div>
                    <Icon icon="bell-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bell</div>
                    <Icon icon="bell" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bluetooth</div>
                    <Icon icon="bluetooth" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Book open</div>
                    <Icon icon="book-open" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Book</div>
                    <Icon icon="book" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bookmark</div>
                    <Icon icon="bookmark" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Briefcase</div>
                    <Icon icon="briefcase" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Browser</div>
                    <Icon icon="browser" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Brush</div>
                    <Icon icon="brush" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Bulb</div>
                    <Icon icon="bulb" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Calendar</div>
                    <Icon icon="calendar" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Camera</div>
                    <Icon icon="camera" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Car</div>
                    <Icon icon="car" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Cast</div>
                    <Icon icon="cast" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Charging</div>
                    <Icon icon="charging" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Checkmark circle 2</div>
                    <Icon icon="checkmark-circle-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Checkmark circle</div>
                    <Icon icon="checkmark-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Checkmark</div>
                    <Icon icon="checkmark" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Checkmark square 2</div>
                    <Icon icon="checkmark-square-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Checkmark square</div>
                    <Icon icon="checkmark-square" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Chevron down</div>
                    <Icon icon="chevron-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Chevron left</div>
                    <Icon icon="chevron-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Chevron right</div>
                    <Icon icon="chevron-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Chevron up</div>
                    <Icon icon="chevron-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Clipboard</div>
                    <Icon icon="clipboard" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Clock</div>
                    <Icon icon="clock" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Close circle</div>
                    <Icon icon="close-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Close</div>
                    <Icon icon="close" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Close square</div>
                    <Icon icon="close-square" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Cloud download</div>
                    <Icon icon="cloud-download" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Cloud upload</div>
                    <Icon icon="cloud-upload" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Code download</div>
                    <Icon icon="code-download" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Code</div>
                    <Icon icon="code" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Collapse</div>
                    <Icon icon="collapse" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Color palette</div>
                    <Icon icon="color-palette" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Color picker</div>
                    <Icon icon="color-picker" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Compass</div>
                    <Icon icon="compass" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Copy</div>
                    <Icon icon="copy" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner down left</div>
                    <Icon icon="corner-down-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner down right</div>
                    <Icon icon="corner-down-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner left down</div>
                    <Icon icon="corner-left-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner left up</div>
                    <Icon icon="corner-left-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner right down</div>
                    <Icon icon="corner-right-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner right up</div>
                    <Icon icon="corner-right-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner up left</div>
                    <Icon icon="corner-up-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Corner up right</div>
                    <Icon icon="corner-up-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Credit card</div>
                    <Icon icon="credit-card" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Crop</div>
                    <Icon icon="crop" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Cube</div>
                    <Icon icon="cube" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Diagonal arrow left down</div>
                    <Icon icon="diagonal-arrow-left-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Diagonal arrow left up</div>
                    <Icon icon="diagonal-arrow-left-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Diagonal arrow right down</div>
                    <Icon icon="diagonal-arrow-right-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Diagonal arrow right up</div>
                    <Icon icon="diagonal-arrow-right-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Done all</div>
                    <Icon icon="done-all" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Download</div>
                    <Icon icon="download" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Droplet off</div>
                    <Icon icon="droplet-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Droplet</div>
                    <Icon icon="droplet" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Edit 2</div>
                    <Icon icon="edit-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Edit</div>
                    <Icon icon="edit" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Email</div>
                    <Icon icon="email" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Expand</div>
                    <Icon icon="expand" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">External link</div>
                    <Icon icon="external-link" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Eye off 2</div>
                    <Icon icon="eye-off-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Eye off</div>
                    <Icon icon="eye-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Eye</div>
                    <Icon icon="eye" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Facebook</div>
                    <Icon icon="facebook" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">File add</div>
                    <Icon icon="file-add" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">File</div>
                    <Icon icon="file" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">File remove</div>
                    <Icon icon="file-remove" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">File text</div>
                    <Icon icon="file-text" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Film</div>
                    <Icon icon="film" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Flag</div>
                    <Icon icon="flag" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Flash off</div>
                    <Icon icon="flash-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Flash</div>
                    <Icon icon="flash" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Flip 2</div>
                    <Icon icon="flip-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Flip</div>
                    <Icon icon="flip" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Folder add</div>
                    <Icon icon="folder-add" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Folder</div>
                    <Icon icon="folder" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Folder remove</div>
                    <Icon icon="folder-remove" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Funnel</div>
                    <Icon icon="funnel" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Gift</div>
                    <Icon icon="gift" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Github</div>
                    <Icon icon="github" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Globe 2</div>
                    <Icon icon="globe-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Globe</div>
                    <Icon icon="globe" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Google</div>
                    <Icon icon="google" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Grid</div>
                    <Icon icon="grid" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Hard drive</div>
                    <Icon icon="hard-drive" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Hash</div>
                    <Icon icon="hash" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Headphones</div>
                    <Icon icon="headphones" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Heart</div>
                    <Icon icon="heart" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Home</div>
                    <Icon icon="home" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Image</div>
                    <Icon icon="image" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Inbox</div>
                    <Icon icon="inbox" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Info</div>
                    <Icon icon="info" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Keypad</div>
                    <Icon icon="keypad" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Layers</div>
                    <Icon icon="layers" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Layout</div>
                    <Icon icon="layout" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Link 2</div>
                    <Icon icon="link-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Link</div>
                    <Icon icon="link" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Linkedin</div>
                    <Icon icon="linkedin" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">List</div>
                    <Icon icon="list" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Loader</div>
                    <Icon icon="loader" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Lock</div>
                    <Icon icon="lock" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Log in</div>
                    <Icon icon="log-in" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Log out</div>
                    <Icon icon="log-out" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Map</div>
                    <Icon icon="map" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Maximize</div>
                    <Icon icon="maximize" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Menu 2</div>
                    <Icon icon="menu-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Menu arrow</div>
                    <Icon icon="menu-arrow" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Menu</div>
                    <Icon icon="menu" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Message circle</div>
                    <Icon icon="message-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Message square</div>
                    <Icon icon="message-square" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Mic off</div>
                    <Icon icon="mic-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Mic</div>
                    <Icon icon="mic" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Minimize</div>
                    <Icon icon="minimize" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Minus circle</div>
                    <Icon icon="minus-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Minus</div>
                    <Icon icon="minus" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Minus square</div>
                    <Icon icon="minus-square" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Monitor</div>
                    <Icon icon="monitor" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Moon</div>
                    <Icon icon="moon" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">More horizontal</div>
                    <Icon icon="more-horizontal" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">More vertical</div>
                    <Icon icon="more-vertical" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Move</div>
                    <Icon icon="move" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Music</div>
                    <Icon icon="music" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Navigation 2</div>
                    <Icon icon="navigation-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Navigation</div>
                    <Icon icon="navigation" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Npm</div>
                    <Icon icon="npm" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Options 2</div>
                    <Icon icon="options-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Options</div>
                    <Icon icon="options" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Pantone</div>
                    <Icon icon="pantone" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Paper plane</div>
                    <Icon icon="paper-plane" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Pause circle</div>
                    <Icon icon="pause-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">People</div>
                    <Icon icon="people" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Percent</div>
                    <Icon icon="percent" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">user add</div>
                    <Icon icon="user-add" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">user delete</div>
                    <Icon icon="user-delete" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">user done</div>
                    <Icon icon="user-done" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">user</div>
                    <Icon icon="user" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">user remove</div>
                    <Icon icon="user-remove" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Phone call</div>
                    <Icon icon="phone-call" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Phone missed</div>
                    <Icon icon="phone-missed" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Phone off</div>
                    <Icon icon="phone-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Phone</div>
                    <Icon icon="phone" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Pie chart</div>
                    <Icon icon="pie-chart" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Pin</div>
                    <Icon icon="pin" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Play circle</div>
                    <Icon icon="play-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Plus circle</div>
                    <Icon icon="plus-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Plus</div>
                    <Icon icon="plus" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Plus square</div>
                    <Icon icon="plus-square" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Power</div>
                    <Icon icon="power" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Pricetags</div>
                    <Icon icon="pricetags" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Printer</div>
                    <Icon icon="printer" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Question mark circle</div>
                    <Icon icon="question-mark-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Question mark</div>
                    <Icon icon="question-mark" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Radio button off</div>
                    <Icon icon="radio-button-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Radio button on</div>
                    <Icon icon="radio-button-on" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Radio</div>
                    <Icon icon="radio" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Recording</div>
                    <Icon icon="recording" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Refresh</div>
                    <Icon icon="refresh" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Repeat</div>
                    <Icon icon="repeat" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Rewind left</div>
                    <Icon icon="rewind-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Rewind right</div>
                    <Icon icon="rewind-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Save</div>
                    <Icon icon="save" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Scissors</div>
                    <Icon icon="scissors" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Search</div>
                    <Icon icon="search" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Settings 2</div>
                    <Icon icon="settings-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Settings</div>
                    <Icon icon="settings" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shake</div>
                    <Icon icon="shake" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Share</div>
                    <Icon icon="share" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shield off</div>
                    <Icon icon="shield-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shield</div>
                    <Icon icon="shield" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shopping bag</div>
                    <Icon icon="shopping-bag" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shopping cart</div>
                    <Icon icon="shopping-cart" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shuffle 2</div>
                    <Icon icon="shuffle-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Shuffle</div>
                    <Icon icon="shuffle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Step backwards</div>
                    <Icon icon="step-backward" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Step forward</div>
                    <Icon icon="step-forward" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Slash</div>
                    <Icon icon="slash" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Smartphone</div>
                    <Icon icon="smartphone" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Smiling face</div>
                    <Icon icon="smiling-face" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Speaker</div>
                    <Icon icon="speaker" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Square</div>
                    <Icon icon="square" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Star</div>
                    <Icon icon="star" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Stop circle</div>
                    <Icon icon="stop-circle" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sun</div>
                    <Icon icon="sun" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Swap</div>
                    <Icon icon="swap" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Sync</div>
                    <Icon icon="sync" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Text</div>
                    <Icon icon="text" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Thermometer minus</div>
                    <Icon icon="thermometer-minus" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Thermometer</div>
                    <Icon icon="thermometer" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Thermometer plus</div>
                    <Icon icon="thermometer-plus" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Toggle left</div>
                    <Icon icon="toggle-left" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Toggle right</div>
                    <Icon icon="toggle-right" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Trash 2</div>
                    <Icon icon="trash-2" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Trash</div>
                    <Icon icon="trash" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Trending down</div>
                    <Icon icon="trending-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Trending up</div>
                    <Icon icon="trending-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Tv</div>
                    <Icon icon="tv" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Twitter</div>
                    <Icon icon="twitter" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Umbrella</div>
                    <Icon icon="umbrella" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Undo</div>
                    <Icon icon="undo" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Unlock</div>
                    <Icon icon="unlock" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Upload</div>
                    <Icon icon="upload" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Video off</div>
                    <Icon icon="video-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Video</div>
                    <Icon icon="video" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Volume down</div>
                    <Icon icon="volume-down" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Volume mute</div>
                    <Icon icon="volume-mute" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Volume off</div>
                    <Icon icon="volume-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Volume up</div>
                    <Icon icon="volume-up" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Wifi off</div>
                    <Icon icon="wifi-off" className="cui-icon-size-12" />
                </Card.Content>
            </Card><Card>
                <Card.Content className="d-flex align-items-center justify-content-center flex-direction-column">
                    <div className="card-header-title mb-2">Wifi</div>
                    <Icon icon="wifi" className="cui-icon-size-12" />
                </Card.Content>
            </Card>
            </Grid>
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
