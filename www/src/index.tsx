import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Col, Page, Row } from '../../src';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Row>
                <Col width={1}>Test</Col>
                <Col sm={2}>Test</Col>
                <Col md={3}>Test</Col>
                <Col lg={4}>Test</Col>
                <Col xl={5}>Test</Col>
            </Row>
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
