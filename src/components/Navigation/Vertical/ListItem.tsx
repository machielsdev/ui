import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavigationContext } from './NavigationContext';

interface NavigationListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    content?: React.ReactNode;
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
): React.ReactElement => {
    return (
        <NavigationContext.Consumer>
            {() => (
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
            )}
        </NavigationContext.Consumer>
    )
});

NavigationListItem.displayName = 'NavigationListItem';
NavigationListItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.element
};

export default NavigationListItem;
