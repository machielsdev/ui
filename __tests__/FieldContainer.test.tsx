import { render } from 'enzyme';
import React from 'react';
import FieldContainer from '@/components/Field/FieldContainer';

describe('FieldBase test', () => {
    it('should render field container', () => {
        const container = render(
            <div>
                <FieldContainer/>
            </div>
        );

        expect(container.find('.form-field-container').length).toBe(1);
    });

    it('should render field container toggle', () => {
        const container = render(
            <div>
                <FieldContainer toggles />
            </div>
        );

        expect(container.find('.form-field-container.toggles').length).toBe(1);
    });
});
