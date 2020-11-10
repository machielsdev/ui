import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type NavigationListProps = React.HTMLAttributes<HTMLElement>;

const NavigationList = React.forwardRef<HTMLElement, NavigationListProps>((
    {
        children,
        className
    },
    ref
): React.ReactElement => (
    <nav
        ref={ref}
        className={clsx(
            'vertical-navigation-list',
            className
        )}
    >
        {children}
    </nav>
));

NavigationList.displayName = 'NavigationList';
NavigationList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default NavigationList;
