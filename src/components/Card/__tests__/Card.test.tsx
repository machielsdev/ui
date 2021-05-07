import { render } from 'enzyme';
import React from 'react';
import { Variant } from '../../utils';
import Card from '../Card';
import CardContent from '../Content';
import CardHeader from '../Header';

describe('Card test', () => {
    it('should render card', () => {
        const container = render(
            <div>
                <Card />
            </div>
        );

        expect(container.find('.card').length).toBe(1);
    });

    it('should render card header', () => {
        const container = render(
            <div>
                <Card>
                    <Card.Header title="Foo" />
                    <CardHeader title="Foo" />
                    Hello world
                </Card>
            </div>
        );

        expect(container.find('.card .card-header').length).toBe(2);
    });

    it('should render card header with actions', () => {
        const container = render(
            <div>
                <Card>
                    <Card.Header title="Foo" actions={[<div key="1" className="foo"/>, null]} />
                    Hello world
                </Card>
            </div>
        );

        expect(container.find('.card .card-header .card-header-action').length).toBe(1);
    });

    it('should render card content', () => {
        const container = render(
            <div>
                <Card>
                    <Card.Content>Content</Card.Content>
                    <CardContent>Content</CardContent>
                </Card>
            </div>
        );

        expect(container.find('.card .card-content').text()).toBe('ContentContent');
    });

    it('should render variant card ', () => {
        const container = render(
            <div>
                <Card variant={Variant.PRIMARY} />
            </div>
        );

        expect(container.find('.card.card-primary').length).toBe(1);
    });
});
