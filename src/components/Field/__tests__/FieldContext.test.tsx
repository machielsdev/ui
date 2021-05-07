import React from 'react';
import { render } from 'enzyme';
import { FieldContext } from '../FieldContext';

describe('FieldContext test', () => {
    it('should use default values when no consumer used', () => {
        const mockChangeValue = jest.fn();
        const mockChangeFocus = jest.fn();
        const container = render(
            <div>
                <FieldContext.Consumer>
                    {({ changeValue, changeFocus }) => {
                        const a = changeValue(true);
                        const b = changeFocus(true);

                        return <span>{a === undefined && b === undefined ? 'undefined' : 'defined'}</span>;
                    }}
                </FieldContext.Consumer>
            </div>,
            { context: {
                changeValue: mockChangeValue,
                changeFocus: mockChangeFocus
            } }
        )

        expect(container.find('span').text()).toBe('undefined');
    });
})
