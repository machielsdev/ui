import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    lg?: number | string;
    md?: number | string;
    sm?: number | string;
    width?: number | string;
    xl?: number | string;
}

const Col = React.forwardRef<HTMLDivElement, ColProps>((
    {
        className,
        children,
        lg,
        md,
        sm,
        width,
        xl
    },
    ref
) => (
    <div
        ref={ref}
        className={clsx(
            'col',
            className,
            lg && `lg:col-${lg}`,
            md && `md:col-${md}`,
            sm && `sm:col-${sm}`,
            width && `col-${width}`,
            xl && `xl:col-${xl}`
        )}
    >
        {children}
    </div>
));

Col.displayName = 'Col';
Col.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Col;
