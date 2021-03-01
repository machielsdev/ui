import { mount, shallow } from 'enzyme';
import React from 'react';
import Pane from '../Pane';
import PaneContainer from '../Container';
import PaneContent from '../Content';

describe('Pane test', () => {
    it('should render pane container', () => {
        const container = shallow(
            <PaneContainer>
                Hello world
            </PaneContainer>
        );

        expect(container.find('.pane-container').length).toBe(1);
    });

    it('should render vertical pane container', () => {
        const container = shallow(
            <PaneContainer vertical>
                Hello world
            </PaneContainer>
        );

        expect(container.find('.pane-container.vertical').length).toBe(1);
    });

    it('should render pane', () => {
        const container = shallow(
            <Pane>
                Hello world
            </Pane>
        );

        expect(container.find('.pane').length).toBe(1);
    });

    it('should render horizontal pane', () => {
        const container = shallow(
            <Pane horizontal>
                Hello world
            </Pane>
        );

        expect(container.find('.pane.horizontal').length).toBe(1);
    });
    it('should render pane content', () => {
        const container = mount(
            <div>
                <PaneContent>
                    Hello world
                </PaneContent>
                <Pane.Content>
                    Hello world
                </Pane.Content>
            </div>
        );

        expect(container.find('.pane-content').length).toBe(2);
    });
});
