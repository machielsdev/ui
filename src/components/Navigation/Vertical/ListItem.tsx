import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

interface NavigationListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    icon?: React.ReactElement;
}

const NavigationListItem = React.forwardRef<HTMLDivElement, NavigationListItemProps>((
    {
        active,
        children,
        className,
        icon
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'vertical-navigation-list-item',
            active && 'active',
            className
        )}
    >
        {icon && (
            <div className="vertical-navigation-list-item-icon">
                {icon}
            </div>
        )}
        <span className="vertical-navigation-list-item-text">
            {children}
        </span>
    </div>
));

NavigationListItem.displayName = 'NavigationListItem';
NavigationListItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.element
};

export default NavigationListItem;
