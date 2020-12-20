import * as React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '@/components/Overlay/OverlayTrigger';
import { Placement } from '@popperjs/core';

interface TooltipProps {
    arrow?: boolean;
    children: React.ReactElement;
    placement?: Placement;
    content: React.ReactNode;
}

const Tooltip = ({
    arrow,
    children,
    content,
    placement
}: TooltipProps): React.ReactElement => (
    <OverlayTrigger
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
    content: PropTypes.node
}

export default Tooltip;
