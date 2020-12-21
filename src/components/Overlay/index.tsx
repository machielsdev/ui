import React from 'react';
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
import { AnimationFeature, ExitFeature, HTMLMotionProps, m as motion, MotionConfig } from 'framer-motion';
import { motionsMap } from '@/components/animations/motionsMap';

interface OverlayProps {
    className?: string;
    triggerRef: React.MutableRefObject<HTMLElement | undefined>;
    placement?: Placement;
    arrow?: boolean;
    positionStrategy?: PositioningStrategy;
    motion?: string;
}

const Overlay = ({
    children,
    className,
    triggerRef,
    placement = 'top',
    arrow = true,
    positionStrategy = 'absolute',
    motion: triggerMotion
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
    });

    const createMotion = (): Record<string, HTMLMotionProps<'div'>> => {
        if (!triggerMotion) {
            return {};
        }

        if (Object.prototype.hasOwnProperty.call(motionsMap, triggerMotion)) {
            return motionsMap[triggerMotion];
        }

        return {};
    }

    useEffect((): void => {
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
        <MotionConfig features={[ExitFeature, AnimationFeature]}>
            <div
                ref={ref}
                className={clsx(
                    'overlay-container',
                    arrow && 'has-arrow',
                    className
                )}
            >
                <motion.div
                    className="overlay-animator"
                    exit={{}}
                    {...createMotion()}
                >
                    {arrow && (<div className="overlay-arrow arrow" />)}
                    <div
                        className="content"
                    >
                        {children}
                    </div>
                </motion.div>
            </div>
        </MotionConfig>,
        document.body
    )
}

Overlay.propTypes = {
    triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) })
}

export default Overlay;
