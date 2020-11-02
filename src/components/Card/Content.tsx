import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>((
    {
        children,
        className
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'card-content',
            className
        )}
    >
        {children}
    </div>
));

CardContent.displayName = 'CardContent';
CardContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default CardContent;
