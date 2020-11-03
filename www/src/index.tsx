import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Card, Col, Page, Row } from '../../src';
import Container from '../../src/components/Container/Container';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Card>
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
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
