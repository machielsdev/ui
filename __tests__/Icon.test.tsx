import { render } from 'enzyme';
import { Icon } from '@/components';
import React from 'react';

describe('Icon test', () => {
    it('should render icon', () => {
        const container = render(
            <div>
                <Icon icon="home"/>
            </div>
        );

        expect(container.find('.cui-icon.cui-icon-home').length).toBe(1);
    });

    it('should render icon with specific size', () => {
        const container = render(
            <div>
                <Icon icon="home" size={12} />
            </div>
        );

        expect(container.find('.cui-icon.cui-icon-home.cui-icon-size-12').length).toBe(1);
    });
});
