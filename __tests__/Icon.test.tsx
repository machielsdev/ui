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

        expect(container.find('.icon.icon-home').length).toBe(1);
    });

    it('should render icon with specific size', () => {
        const container = render(
            <div>
                <Icon icon="home" size={12} />
            </div>
        );

        expect(container.find('.icon.icon-home.icon-size-12').length).toBe(1);
    });
});
