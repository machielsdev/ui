import { mount, render } from 'enzyme';
import React from 'react';
import { Button, TextField, Variant } from '@/components';

describe('TextField test', () => {
    it('should render text input', () => {
        const container = render(
            <div>
                <TextField/>
            </div>
        );

        expect(container.find('.form-field-base input').length).toBe(1);
    });

    it('should render variant class', () => {
        const container = render(
            <div>
                <TextField
                    variant={Variant.PRIMARY}
                />
            </div>
        );

        expect(container.find('.form-field-base').hasClass('form-field-primary')).toBeTruthy();
    });

    it('should give focus class when focused', () => {
        const container = mount(
            <TextField/>
        );

        container.find('input').simulate('focus');

        expect(container.find('.form-field-base').hasClass('focused')).toBeTruthy();
    });

    it('should not have focus class when blurred after focus', () => {
        const container = mount(
            <TextField/>
        );

        container.find('input').simulate('focus').simulate('blur');

        expect(container.find('.form-field-base').hasClass('focused')).toBeFalsy();
    });

    it('should call onChange method when changing', () => {
        const fn = jest.fn();

        const container = mount(
            <TextField onChange={() => fn()}/>
        );

        container.find('input').simulate('change');

        expect(fn).toHaveBeenCalled();
    });

    it('should not call onChange method when ommited', () => {
        const fn = jest.fn();

        const container = mount(
            <TextField/>
        );

        container.find('input').simulate('change');

        expect(fn).not.toHaveBeenCalled();
    });

    it('Should be controllable from outside', () => {
        const fn = jest.fn();

        const container = mount(
            <TextField value="Test" onChange={() => fn()}/>
        );

        expect(container.find('input').prop('value')).toBe('Test');

        container.find('input').simulate('change', {target: {value: 'Foo'}});

        expect(container.find('input').prop('value')).toBe('Foo');
        expect(fn).toHaveBeenCalled();
    });

    it('should render floating label', () => {
        const container = mount(
            <div>
                <TextField label="Username"/>
            </div>
        );


        expect(container.find('input').hasClass('floating-label')).toBeFalsy();
        expect(container.find('.form-field-base .form-field-label-floating').length).toBe(1);
    });

    it('should render valid fields', () => {
        const container = mount(
            <div>
                <TextField valid={true}/>
            </div>
        );


        expect(container.find('.form-field-base').hasClass('form-field-valid')).toBeTruthy();
    });

    it('should render invalid fields', () => {
        const container = mount(
            <div>
                <TextField valid={false}/>
            </div>
        );


        expect(container.find('.form-field-base').hasClass('form-field-invalid')).toBeTruthy();
    });

    it('should render field actions', () => {
        const container = mount(
            <div>
                <TextField actions={[<Button key={1} variant={Variant.PRIMARY}/>]}/>
            </div>
        );

        expect(container.find('.form-field-base .form-field-actions > *').length).toBe(1);
    });
});
