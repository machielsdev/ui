import { shallow } from 'enzyme';
import React from 'react';
import Panel from '../Panel';

describe('Page test', () => {
    it('should render panel', () => {
        const container = shallow(
            <Panel>
                Hello world
            </Panel>
        );

        expect(container.find('.panel').length).toBe(1);
    });

    it('should render spaced panel', () => {
        const container = shallow(
            <Panel spaced>
                Hello world
            </Panel>
        );

        expect(container.find('.panel.panel-spaced').length).toBe(1);
    });
});
