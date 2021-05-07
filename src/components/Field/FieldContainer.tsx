import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export interface FieldContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    toggles?: boolean;
}

const FieldContainer = React.forwardRef<HTMLDivElement, FieldContainerProps>((
    {
        children,
        className,
        toggles
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'form-field-container',
            toggles && 'toggles',
            className
        )}
    >
        {children}
    </div>
));

FieldContainer.displayName = 'FieldContainer';
FieldContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    toggles: PropTypes.bool
}

export default FieldContainer;
