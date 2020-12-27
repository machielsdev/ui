import * as React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Overlay from '@/components/Overlay/index';
import { Placement, PositioningStrategy } from '@popperjs/core';
import { Trigger, triggerPropTypes } from '@/components/Overlay/Trigger';
import { AnimatePresence } from 'framer-motion';

interface OverlayTriggerProps {
    arrow?: boolean;
    children: React.ReactElement;
    overlay: React.ReactNode;
    placement?: Placement;
    positionStrategy?: PositioningStrategy;
    className?: string;
    trigger?: Trigger | string;
    motion?: string;
}

const OverlayTrigger = ({
    arrow,
    children: triggerElement,
    className,
    overlay,
    placement,
    positionStrategy,
    trigger = 'hover',
    motion
}: OverlayTriggerProps): React.ReactElement => {
    const [shown, setShown] = useState<boolean>(false);
    const triggerRef = useRef<HTMLElement>();

    const attachEvents = (child: React.ReactElement, trigger: string) => {
        switch (trigger) {
            case Trigger.CLICK:
                return {
                    onClick: (event: React.MouseEvent) => {
                        if (child.props.onClick) {
                            child.props.onClick(event);
                        }

                        setShown(!shown);
                    }
                }
            case Trigger.HOVER:
            default:
                return {
                    onMouseEnter: (event: React.MouseEvent): void => {
                        if (child.props.onMouseEnter) {
                            child.props.onMouseEnter(event);
                        }

                        setShown(true)
                    },
                    onMouseLeave: (event: React.MouseEvent) => {
                        if (child.props.onMouseLeave) {
                            child.props.onMouseLeave(event);
                        }

                        setShown(false)
                    }
                }
        }
    }

    const createChildren = () => shown && (
        <Overlay
            motion={motion}
            arrow={arrow}
            triggerRef={triggerRef}
            placement={placement}
            positionStrategy={positionStrategy}
            className={className}
        >
            {overlay}
        </Overlay>
    )

    return (
        <>
            {React.cloneElement(triggerElement, {
                ref: triggerRef,
                ...attachEvents(triggerElement, trigger)
            })}
            {motion
                ? React.createElement(AnimatePresence, {}, createChildren())
                : createChildren()}
        </>
    )
}

OverlayTrigger.displayName = 'OverlayTrigger';
OverlayTrigger.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overlay: PropTypes.element.isRequired,
    placement: PropTypes.string,
    trigger: triggerPropTypes
}

export default OverlayTrigger;
