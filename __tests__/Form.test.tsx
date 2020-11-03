import { render } from 'enzyme';
import React from 'react';
import FormGroup from '@/components/Form/Group';
import FormLabel from '@/components/Form/Label';

describe('Form test', () => {
    it('should render form-group', () => {
        const container = render(
            <div>
                <FormGroup/>
            </div>
        );

        expect(container.find('.form-group').length).toBe(1);
    });

    it('should render form label', () => {
        const container = render(
            <div>
                <FormLabel />
            </div>
        );

        expect(container.find('.form-label').length).toBe(1);
    });
});
