import * as React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { createPopper, Instance as PopperInstance, Placement } from '@popperjs/core';
import PropTypes from 'prop-types';

interface OverlayProps {
    triggerRef: React.MutableRefObject<HTMLElement | undefined>;
    placement: Placement;
}

const Overlay = ({
    children,
    triggerRef,
    placement = 'top'
}: React.PropsWithChildren<OverlayProps>): React.ReactElement => {
    const ref = useRef<HTMLDivElement | null>(null);
    const popper = useRef<PopperInstance>();

    const createPopperOptions = () => ({
        placement
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
        <motion.div
            ref={ref}
            className="overlay"
        >
            {children}
        </motion.div> ,
        document.body
    )
}

Overlay.propTypes = {
    triggerRef: PropTypes.instanceOf(HTMLElement).isRequired
}

export default Overlay;
