import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: string | number;
    gap?: string | number;
    rows?: string | number;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>((
    {
        children,
        className,
        columns,
        gap,
        rows
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'grid',
            rows && `grid-rows-${rows}`,
            columns && `grid-columns-${columns}`,
            gap && `grid-gap-${gap}`,
            className
        )}
    >
        {children}
    </div>
));

Grid.displayName = 'Grid';
Grid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Grid;
