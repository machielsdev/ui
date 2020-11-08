import { mount, render } from 'enzyme';
import React from 'react';
import { SelectField } from '@/components';

describe('SelectField test', () => {
    it('should render text input', () => {
        const container = render(
            <div>
                <SelectField />
            </div>
        );

        expect(container.find('.form-field-base select').length).toBe(1);
    });

    it('Should set initial value with value prop', () => {
        const fn = jest.fn();

        const container = mount(
            <SelectField value="foo" onChange={() => fn()}>
                <option value="" />
                <option value="foo">bar</option>
            </SelectField>
        );

        expect(container.find('select').props().value).toBe('foo');
    });

    it('Should set initial value with defaultValue prop', () => {
        const fn = jest.fn();

        const container = mount(
            <SelectField defaultValue="foo" onChange={() => fn()}>
                <option value="" />
                <option value="foo">bar</option>
            </SelectField>
        );

        expect(container.find('select').props().value).toBe('foo');
    });

    it('Should set initial value based on selected option', () => {
        const fn = jest.fn();

        const container = mount(
            <SelectField onChange={() => fn()}>
                <option value="" />
                <option value="foo" selected>bar</option>
            </SelectField>
        );

        expect(container.find('select').props().value).toBe('foo');
    });

    it('should give focus class when focused', () => {
        const container = mount(
            <SelectField/>
        );

        container.find('select').simulate('focus');

        expect(container.find('.form-field-base').hasClass('focused')).toBeTruthy();
    });

    it('should not have focus class when blurred after focus', () => {
        const container = mount(
            <SelectField/>
        );

        container.find('select').simulate('focus').simulate('blur');

        expect(container.find('.form-field-base').hasClass('focused')).toBeFalsy();
    });

    it('should call onChange method when changing', () => {
        const fn = jest.fn();

        const container = mount(
            <SelectField onChange={() => fn()}/>
        );

        container.find('select').simulate('change');

        expect(fn).toHaveBeenCalled();
    });

    it('should not call onChange method when ommited', () => {
        const fn = jest.fn();

        const container = mount(
            <SelectField/>
        );

        container.find('select').simulate('change');

        expect(fn).not.toHaveBeenCalled();
    });

    it('should ignore invalid react elements and select last selected option', () => {

        const container = mount(
            <SelectField>
                {undefined}
                <div />
                <option selected value="foo"></option>
                <option selected value="bar"></option>
            </SelectField>
        );

        expect(container.find('select').props().value).toBe('bar');
    });
});
