import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Variant } from '@/components';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    spaced?: boolean;
    variant?: Variant| string;
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(({
    children,
    className,
    spaced,
    variant
}): React.ReactElement => (
    <div
        className={clsx(
            'panel',
            spaced && 'panel-spaced',
            variant && `panel-${variant}`,
            className
        )}
    >
        {children}
    </div>
));

Panel.displayName = 'Panel';
Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    spaced: PropTypes.bool,
    variant: PropTypes.string
}

export default Panel;
