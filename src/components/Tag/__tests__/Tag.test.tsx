import { shallow } from 'enzyme';
import React from 'react';
import Tag from '../Tag';
import { Variant } from '../../utils';

describe('Tag test', () => {

    it('should render tag', () => {
        const container = shallow(
            <Tag variant={Variant.ORANGE}>
                Hello world
            </Tag>
        );

        expect(container.find('.tag.tag-orange').length).toBe(1);
    });
});
