import { render } from 'enzyme';
import React from 'react';
import Container from '../Container';

describe('Container test', () => {
    it('should render container', () => {
        const container = render(
            <div>
                <Container/>
            </div>
        );

        expect(container.find('.container').length).toBe(1);
    });

    it('should render fluid container', () => {
        const container = render(
            <div>
                <Container fluid/>
            </div>
        );

        expect(container.find('.container-fluid').length).toBe(1);
    });
});
