import { render } from 'enzyme';
import React from 'react';
import { Col, Grid, Row } from '@/components';

describe('Grid test', () => {
    it('should render grid', () => {
        const container = render(
            <div>
                <Grid />
            </div>
        );

        expect(container.find('.grid').length).toBe(1);
    });

    it('should render grid rows', () => {
        const container = render(
            <div>
                <Grid rows={5} />
            </div>
        );

        expect(container.find('.grid.grid-rows-5').length).toBe(1);
    });

    it('should render grid columns', () => {
        const container = render(
            <div>
                <Grid columns={5} />
            </div>
        );

        expect(container.find('.grid.grid-columns-5').length).toBe(1);
    });

    it('should render grid gap', () => {
        const container = render(
            <div>
                <Grid gap={5} />
            </div>
        );

        expect(container.find('.grid.grid-gap-5').length).toBe(1);
    });

    it('should render rows', () => {
        const container = render(
            <div>
                <Row />
            </div>
        );

        expect(container.find('.row').length).toBe(1);
    });

    it('should render row within cols', () => {
        const container = render(
            <div>
                <Row>
                    <Col>Test</Col>
                    <Col>Test</Col>
                    <Col>Test</Col>
                </Row>
            </div>
        );

        expect(container.find('.row .col').length).toBe(3);
    });

    it('should render cols with breakpoints set', () => {
        const container = render(
            <div>
                <Row>
                    <Col width={5}>Test</Col>
                    <Col sm={5}>Test</Col>
                    <Col md={5}>Test</Col>
                    <Col lg={5}>Test</Col>
                    <Col xl={5}>Test</Col>
                </Row>
            </div>
        );

        expect(container.find('.row .col.col-5').length).toBe(1);
        expect(container.find('.row .col.sm\\:col-5').length).toBe(1);
        expect(container.find('.row .col.md\\:col-5').length).toBe(1);
        expect(container.find('.row .col.lg\\:col-5').length).toBe(1);
        expect(container.find('.row .col.xl\\:col-5').length).toBe(1);
    });
});
