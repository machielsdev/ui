import * as React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import {
    createPopper,
    Instance as PopperInstance,
    Placement,
    Options as PopperOptions, PositioningStrategy
} from '@popperjs/core';
import PropTypes from 'prop-types';
import { Modifier } from '@popperjs/core/lib/types';

interface OverlayProps {
    triggerRef: React.MutableRefObject<HTMLElement | undefined>;
    placement: Placement;
    arrow?: boolean;
    positionStrategy: PositioningStrategy;
}

const Overlay = ({
    children,
    triggerRef,
    placement = 'top',
    arrow = true,
    positionStrategy = 'absolute'
}: React.PropsWithChildren<OverlayProps>): React.ReactElement => {
    const ref = useRef<HTMLDivElement | null>(null);
    const popper = useRef<PopperInstance>();

    const createModifiers = (): Array<Partial<Modifier<any, any>>> => ([
        ...(arrow ? [{
            name: 'arrow',
            options: {
                element: '.overlay-arrow'
            }
        }] : [])
    ]);

    const createPopperOptions = (): PopperOptions => ({
        modifiers: createModifiers(),
        placement,
        strategy: positionStrategy
    })

    useEffect(() => {
        if (ref.current && triggerRef.current) {
            popper.current = createPopper(
                triggerRef.current,
                ref.current,
                createPopperOptions()
            );
        }
    }, [])

    return createPortal(
        <div
            ref={ref}
            className="overlay"
        >
            <div className="overlay-arrow" />
            {children}
        </div> ,
        document.body
    )
}

Overlay.propTypes = {
    triggerRef: PropTypes.instanceOf(HTMLElement).isRequired
}

export default Overlay;
