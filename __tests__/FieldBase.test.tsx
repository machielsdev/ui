import React from 'react';
import { mount, render } from 'enzyme';
import FieldBase from '@/components/Field/FieldBase';
import { Variant } from '@/components';
import { FieldContext } from '@/components/Field/FieldContext';

describe('FieldBase test', () => {
    it('should render field base', () => {
        const container = render(
            <div>
                <FieldBase />
            </div>
        );

        expect(container.find('.form-field-base').length).toBe(1);
    });

    it('should set variant', () => {
        const container = render(
            <div>
                <FieldBase
                    variant={Variant.PRIMARY}
                />
            </div>
        );

        expect(container.find('.form-field-base.form-field-primary').length).toBe(1);
    });

    it('should set variant', () => {
        const container = render(
            <div>
                <FieldBase
                    variant={Variant.PRIMARY}
                />
            </div>
        );

        expect(container.find('.form-field-base.form-field-primary').length).toBe(1);
    });

    it('should make floating label component', () => {
        const container = render(
            <div>
                <FieldBase
                    label={<strong>test</strong>}
                />
            </div>
        );

        expect(container.find('.form-field-base').hasClass('floating-label')).toBeTruthy();
        expect(container.find('.form-field-base .form-field-label-floating strong').text())
            .toBe('test');
    });

    it('should make invalid state icon', () => {
        const container = render(
            <div>
                <FieldBase
                    label={<strong>test</strong>}
                    valid={false}
                >
                    <FieldContext.Consumer>
                        {({ stateIcon }) => stateIcon}
                    </FieldContext.Consumer>
                </FieldBase>
            </div>
        );

        expect(container.find('.field-state-icon .icon-close-circle').length).toBe(1);
    })

    it('should make valid state icon', () => {
        const container = render(
            <div>
                <FieldBase
                    label={<strong>test</strong>}
                    valid={true}
                >
                    <FieldContext.Consumer>
                        {({ stateIcon }) => stateIcon}
                    </FieldContext.Consumer>
                </FieldBase>
            </div>
        );

        expect(container.find('.field-state-icon .icon-checkmark-circle-2').length).toBe(1);
    })

    it('should change focus and value', () => {
        const container = mount(
            <div>
                <FieldBase>
                    <FieldContext.Consumer>
                        {({ changeFocus, changeValue }) => {
                            changeFocus(true);
                            changeValue(true);
                            return undefined
                        }}
                    </FieldContext.Consumer>
                </FieldBase>
            </div>
        );

        expect(container.find('.form-field-base.focused.has-value').length).toBe(1);
    })

    it('should render actions', () => {
        const container = mount(
            <div>
                <FieldBase actions={<span>foo</span>} />
            </div>
        );

        expect(container.find('.form-field-base .form-field-actions span').text()).toBe('foo');
    });
});
