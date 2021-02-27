import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type RowProps = React.HTMLAttributes<HTMLDivElement>;

const Row = React.forwardRef<HTMLDivElement, RowProps>((
    {
        children,
        className,
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'row',
            className
        )}
    >
        {children}
    </div>
));

Row.displayName = 'Row';
Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Row;
