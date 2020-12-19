import * as React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Overlay from '@/components/Overlay/index';
import { Placement } from '@popperjs/core';

interface OverlayTriggerProps {
    children: React.ReactElement;
    overlay: React.ReactNode;
    placement: Placement;
}

const OverlayTrigger = ({
    children: triggerElement,
    overlay,
    placement = 'top'
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
                    triggerRef={triggerRef}
                    placement={placement}
                >
                    {overlay}
                </Overlay>
            )}
        </>
    )
}

OverlayTrigger.displayName = 'OverlayTrigger';
OverlayTrigger.propTypes = {
    children: PropTypes.node,
    overlay: PropTypes.element,
    placement: PropTypes.string
}

export default OverlayTrigger;
