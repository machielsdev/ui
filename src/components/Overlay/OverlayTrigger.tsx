import * as React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Overlay from '@/components/Overlay/index';
import { Placement, PositioningStrategy } from '@popperjs/core';

interface OverlayTriggerProps {
    arrow?: boolean;
    children: React.ReactElement;
    overlay: React.ReactNode;
    placement?: Placement;
    positionStrategy?: PositioningStrategy;
    className?: string;
}

const OverlayTrigger = ({
    arrow,
    children: triggerElement,
    className,
    overlay,
    placement,
    positionStrategy
}: OverlayTriggerProps): React.ReactElement => {
    const [shown, setShown] = useState<boolean>(false);
    const triggerRef = useRef<HTMLElement>();

    return (
        <>
            {React.cloneElement(triggerElement, {
                ref: triggerRef,
                onMouseEnter: (event: React.MouseEvent): void => {
                    if (triggerElement.props.onMouseEnter) {
                        triggerElement.props.onMouseEnter(event)
                    }

                    setShown(true);
                },
                onMouseLeave: (event: React.MouseEvent) => {
                    if (triggerElement.props.onHover) {
                        triggerElement.props.onMouseLeave(event)
                    }

                    setShown(false);
                }
            })}
            {shown && (
                <Overlay
                    arrow={arrow}
                    triggerRef={triggerRef}
                    placement={placement}
                    positionStrategy={positionStrategy}
                    className={className}
                >
                    {overlay}
                </Overlay>
            )}
        </>
    )
}

OverlayTrigger.displayName = 'OverlayTrigger';
OverlayTrigger.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlay: PropTypes.element.isRequired,
    placement: PropTypes.string
}

export default OverlayTrigger;
