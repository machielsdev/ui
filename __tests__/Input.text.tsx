import { shallow } from 'enzyme';
import React from 'react';
import { Variant } from '@/components';
import { Input } from '@/components/Input';

describe('Input test', () => {
    it('should render input', () => {
        const container = shallow(
            <Input
                type="password"
                variant={Variant.PRIMARY}
            >
                Hello world
            </Input>
        );

        expect(container.find('input').length).toBe(1);
    });
});
