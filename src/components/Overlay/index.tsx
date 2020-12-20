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
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface OverlayProps {
    className?: string;
    triggerRef: React.MutableRefObject<HTMLElement | undefined>;
    placement?: Placement;
    arrow?: boolean;
    positionStrategy?: PositioningStrategy;
}

const Overlay = ({
    children,
    className,
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
                element: '.arrow'
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
            popper.current?.forceUpdate()
        }
    }, [])

    return createPortal(
        <div
            ref={ref}
            className={clsx(
                'overlay-container',
                arrow && 'has-arrow',
                className
            )}
        >
            {arrow && (<div className="overlay-arrow arrow" />)}
            <motion.div
                className="content"
            >
                {children}
            </motion.div>
        </div> ,
        document.body
    )
}

Overlay.propTypes = {
    triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) })
}

export default Overlay;
