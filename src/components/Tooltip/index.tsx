import * as React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '@/components/Overlay/OverlayTrigger';
import { Placement } from '@popperjs/core';
import { Trigger, triggerPropTypes } from '@/components/Overlay/Trigger';

interface TooltipProps {
    arrow?: boolean;
    children: React.ReactElement;
    placement?: Placement;
    content: React.ReactNode;
    trigger?: Trigger | string;
    motion?: string;
}

const Tooltip = ({
    arrow,
    children,
    content,
    placement,
    trigger = 'hover',
    motion
}: TooltipProps): React.ReactElement => (
    <OverlayTrigger
        motion={motion}
        trigger={trigger}
        arrow={arrow}
        overlay={content}
        placement={placement}
        className="tooltip"
    >
        {children}
    </OverlayTrigger>
)

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
    children: PropTypes.element,
    placement: PropTypes.string,
    content: PropTypes.node,
    trigger: triggerPropTypes
}

export default Tooltip;
