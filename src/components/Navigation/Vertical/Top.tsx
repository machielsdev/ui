import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type NavigationTopProps = React.HTMLAttributes<HTMLDivElement>;

const NavigationTop = React.forwardRef<HTMLDivElement, NavigationTopProps>((
    {
        children,
        className
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'vertical-navigation-top',
            className
        )}
    >
        {children}
    </div>
));

NavigationTop.displayName = 'NavigationTop';
NavigationTop.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default NavigationTop;
