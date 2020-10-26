import { shallow } from 'enzyme';
import React from 'react';
import Page from '@/components/Page';

describe('Page test', () => {
    it('should render page', () => {
        const container = shallow(
            <Page>
                Hello world
            </Page>
        );

        expect(container.find('.page').length).toBe(1);
    });

    it('should render page content', () => {
        const container = shallow(
            <Page.Content>
                Hello world
            </Page.Content>
        );

        expect(container.find('.page-content').length).toBe(1);
    });

    it('should render page header', () => {
        const container = shallow(
            <Page.Header title="Test">
                Hello world
            </Page.Header>
        );

        expect(container.find('.page-header').length).toBe(1);
        expect(container.find('.page-header > .page-header-title').length).toBe(1);
        expect(container.find('.page-header > .page-header-title').text()).toContain('Test')
    });
});
