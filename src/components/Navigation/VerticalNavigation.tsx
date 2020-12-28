import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ForwardComponentWithStatics } from '@/components/utils/ForwardComponentWithStatics';
import { Variant } from '@/components';
import NavigationTop from '@/components/Navigation/Vertical/Top';
import NavigationList from '@/components/Navigation/Vertical/List';
import NavigationListItem from '@/components/Navigation/Vertical/ListItem';
import NavigationDivider from '@/components/Navigation/Vertical/Divider';
import { useEffect, useState } from 'react';
import { VerticalNavigationScope } from '@/components/Navigation/Vertical/VerticalNavigationScope';
import { NavigationContext } from './Vertical/NavigationContext';

export interface VerticalNavigationStatics {
    Top: typeof NavigationTop;
    List: typeof NavigationList;
    Item: typeof NavigationListItem;
    Divider: typeof NavigationDivider;
}

export interface VerticalNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Variant of the menu. With this prop, the color of the menu can be set.
     */
    variant?: Variant | string;
    /**
     * Indicates whether the menu collapse is controllable.
     */
    collapsable?: boolean;
    /**
     * Indicating whether the menu is collapsed. Can be used to make the navigation a controllable component
     */
    collapsed?: boolean;
    /**
     * Indicates whether a tooltip with the menu text must be shown when menu is collapsed. Default: true
     */
    tooltipsWhenCollapsed?: boolean;
    /**
     * Children of the menu. This can be either a React ChildNode or callback function to access various actions
     */
    children: React.ReactNode | ((scope: VerticalNavigationScope) => React.ReactNode);
}

// @ts-ignore
const VerticalNavigation: ForwardComponentWithStatics<HTMLDivElement, VerticalNavigationProps, VerticalNavigationStatics> =
    React.forwardRef((
        {
            children,
            className,
            variant,
            collapsed,
            tooltipsWhenCollapsed = true
        },
        ref
    ): React.ReactElement => {
        const [isCollapsed, setCollapsed] = useState<boolean>(false);

        useEffect(() => {
            if (collapsed) {
                setCollapsed(collapsed);
            }
        }, [collapsed])

        const makeScope = (): VerticalNavigationScope => ({
            collapsed: isCollapsed,
            collapse: () => setCollapsed(!collapsed)
        });

        children = typeof children === 'function'
            ? (children as (scope: VerticalNavigationScope) => React.ReactNode)(makeScope())
            : children;

        return (
            <NavigationContext.Provider
                value={{
                    tooltipsWhenCollapsed: tooltipsWhenCollapsed,
                    collapsed: isCollapsed
                }}
            >
                <div
                    ref={ref}
                    className={clsx(
                        'vertical-navigation-container',
                        isCollapsed && 'is-collapsed',
                        variant && `navigation-${variant}`,
                        className
                    )}
                >
                    {children}
                </div>
            </NavigationContext.Provider>
        )
    });

VerticalNavigation.displayName = 'VerticalNavigation';
VerticalNavigation.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.string,
    collapsed: PropTypes.bool,
    tooltipsWhenCollapsed: PropTypes.bool
}

VerticalNavigation.Top = NavigationTop;
VerticalNavigation.List = NavigationList;
VerticalNavigation.Item = NavigationListItem;
VerticalNavigation.Divider = NavigationDivider;


export default VerticalNavigation;
