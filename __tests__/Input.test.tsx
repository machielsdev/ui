import { mount, render } from 'enzyme';
import React from 'react';
import { FormField, Variant } from '@/components';

describe('Input test', () => {
    it('should render input', () => {
        const container = render(
            <div>
                <FormField/>
            </div>
        );

        expect(container.find('.form-field-base > .form-field').length).toBe(1);
    });

    it('should render variant class', () => {
        const container = render(
            <div>
                <FormField
                    variant={Variant.PRIMARY}
                />
            </div>
        );

        expect(container.find('.form-field-base').hasClass('form-field-primary')).toBeTruthy();
    });

    it('should give focus class when focused', () => {
        const container = mount(
            <FormField />
        );

        container.find('input').simulate('focus');

        expect(container.find('.form-field-base').hasClass('focused')).toBeTruthy();
    });
});
