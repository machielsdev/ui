import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type PaneContentProps = React.HTMLAttributes<HTMLDivElement>;

const PaneContent = React.forwardRef<HTMLDivElement, PaneContentProps>((
    {
        children,
        className
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'pane-content',
            className
        )}
    >
        {children}
    </div>
));

PaneContent.displayName = 'PaneContent';
PaneContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default PaneContent;
