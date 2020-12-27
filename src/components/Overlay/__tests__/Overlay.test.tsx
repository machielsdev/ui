import { mount } from 'enzyme';
import React from 'react';
import OverlayTrigger from '@/components/Overlay/OverlayTrigger';
import { motion } from 'framer-motion';

describe('Overlay test', () => {
    it('should render overlay when hovered', async () => {
        const tooltip = mount(
            <div>
                <OverlayTrigger
                    overlay="test"
                >
                    <button>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('mouseenter');

        expect(tooltip.find('.content').text()).toBe('test');

        tooltip.find('button').simulate('mouseleave');

        expect(tooltip.find('.content').length).toBe(0);
    });

    it('should call props along hover triggers', async () => {
        const mockFnEnter = jest.fn();
        const mockFnLeave = jest.fn();

        const tooltip = mount(
            <div>
                <OverlayTrigger
                    overlay="test"
                >
                    <button onMouseEnter={mockFnEnter} onMouseLeave={mockFnLeave}>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('mouseenter');
        tooltip.find('button').simulate('mouseleave');

        expect(mockFnEnter).toHaveBeenCalled();
        expect(mockFnLeave).toHaveBeenCalled();
    });

    it('should render overlay when clicked', async () => {
        const mockFn = jest.fn();

        const tooltip = mount(
            <div>
                <OverlayTrigger
                    trigger="click"
                    overlay="test"
                >
                    <button onClick={mockFn}>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('click');

        expect(tooltip.find('.content').text()).toBe('test');
        expect(mockFn).toHaveBeenCalled();
    });

    it('should render overlay with arrow', async () => {
        const tooltip = mount(
            <div>
                <OverlayTrigger
                    trigger="click"
                    overlay="test"
                    arrow
                >
                    <button>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('click');

        expect(tooltip.find('.arrow')).toBeDefined();
    });

    it('should render overlay without arrow', async () => {
        const tooltip = mount(
            <div>
                <OverlayTrigger
                    trigger="click"
                    overlay="test"
                    arrow={false}
                >
                    <button>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('click');

        expect(tooltip.find('.arrow').length).toBe(0);
    });

    it('should should use motion when defined', async () => {
        const tooltip = mount(
            <div>
                <OverlayTrigger
                    trigger="click"
                    overlay="test"
                    motion="fade"
                >
                    <button>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('click');

        expect(tooltip.find(motion.div)).toBeDefined();
    });

    it('should should ignore undefined motion', async () => {
        const tooltip = mount(
            <div>
                <OverlayTrigger
                    trigger="click"
                    overlay="test"
                    motion="bounce"
                >
                    <button>test</button>
                </OverlayTrigger>
            </div>
        );

        tooltip.find('button').simulate('click');

        expect(tooltip.find(motion.div).length).toBe(0);
    });
});
