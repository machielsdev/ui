import { shallow } from 'enzyme';
import React from 'react';
import Button from '@/components/Button';
import { Variant } from '@/components';

describe('Button test', () => {
    it('should render button', () => {
        const container = shallow(
            <Button
                variant={Variant.PRIMARY}
            >
                Hello world
            </Button>
        );

        expect(container.find('button').length).toBe(1);
    });

    it('should render button as link', () => {
        const container = shallow(
            <Button
                as="a"
                variant={Variant.PRIMARY}
            >
                Hello world
            </Button>
        );

        expect(container.find('a').length).toBe(1);
    });

    it('should render block button', () => {
        const container = shallow(
            <Button
                variant={Variant.PRIMARY}
                block
            >
                Hello world
            </Button>
        );

        expect(container.find('button').hasClass('btn-block')).toBeTruthy();
    });

    it('should render small button', () => {
        const container = shallow(
            <Button
                variant={Variant.PRIMARY}
                small
            >
                Hello world
            </Button>
        );

        expect(container.find('button').hasClass('btn-small')).toBeTruthy();
    });

    it('should render button with icon left', () => {
        const container = shallow(
            <Button
                variant={Variant.PRIMARY}
                iconLeft={<i>icon</i>}
            >
                Hello world
            </Button>
        );

        expect(container.find('button').find('i').text()).toContain('icon');
    });

    it('should render button with icon left', () => {
        const container = shallow(
            <Button
                variant={Variant.PRIMARY}
                iconRight={<i>icon</i>}
            >
                Hello world
            </Button>
        );

        expect(container.find('button').find('i').text()).toContain('icon');
    });
});
