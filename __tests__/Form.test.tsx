import { render } from 'enzyme';
import React from 'react';
import FormGroup from '@/components/Form/Group';
import FormLabel from '@/components/Form/Label';
import FormMessage from '@/components/Form/Message';

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

    it('should render form message', () => {
        const container = render(
            <div>
                <FormMessage>Message</FormMessage>
            </div>
        );

        expect(container.find('.form-message').length).toBe(1);
        expect((container.find('.form-message').text())).toBe('Message');
    });

    it('should render valid form message', () => {
        const container = render(
            <div>
                <FormMessage valid>Message</FormMessage>
            </div>
        );

        expect(container.find('.form-message.form-message-valid').length).toBe(1);
        expect((container.find('.form-message').text())).toBe('Message');
    });

    it('should render invalid form message', () => {
        const container = render(
            <div>
                <FormMessage valid={false}>Message</FormMessage>
            </div>
        );

        expect(container.find('.form-message.form-message-invalid').length).toBe(1);
        expect((container.find('.form-message').text())).toBe('Message');
    });
});
