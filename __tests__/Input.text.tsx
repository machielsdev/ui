import { shallow } from 'enzyme';
import React from 'react';
import { FormField, Variant } from '@/components';

describe('Input test', () => {
    it('should render input', () => {
        const container = shallow(
            <FormField
                variant={Variant.PRIMARY}
            />
        );

        expect(container.find('.cui-form-field-base > .cui-form-field').length).toBe(1);
    });

    it('should render variant class', () => {
        const container = shallow(
            <FormField
                variant={Variant.PRIMARY}
            >
                Hello world
            </FormField>
        );

        expect(container.find('.cui-form-field-base').at(0).hasClass('cui-form-field-primary')).toBeTruthy();
    });

    it('should give focus class when focused', () => {
        const container = shallow(
            <FormField />
        );

        container.find('input').simulate('focus');

        expect(container.find('.cui-form-field-base').hasClass('has-focus')).toBeTruthy();
    });
});
