import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ForwardComponentWithStatics } from '@/components/utils/ForwardComponentWithStatics';
import { Variant } from '@/components';
import NavigationTop from '@/components/Navigation/Vertical/Top';
import NavigationList from '@/components/Navigation/Vertical/List';
import NavigationListItem from '@/components/Navigation/Vertical/ListItem';
import NavigationDivider from '@/components/Navigation/Vertical/Divider';
import { useState } from 'react';
import { VerticalNavigationScope } from './Vertical/VerticalNavigationScope';

export interface VerticalNavigationStatics {
    Top: typeof NavigationTop;
    List: typeof NavigationList;
    Item: typeof NavigationListItem;
    Divider: typeof NavigationDivider;
}

export interface SideNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: Variant | string;
    collapsable?: boolean;
    children: React.ReactNode | ((scope: VerticalNavigationScope) => React.ReactNode);
}

// @ts-ignore
const VerticalNavigation: ForwardComponentWithStatics<HTMLDivElement, SideNavigationProps, VerticalNavigationStatics> =
    React.forwardRef((
        {
            children,
            className,
            variant
        },
        ref
    ): React.ReactElement => {
        const [collapsed, setCollapsed] = useState<boolean>(false);

        const makeScope = (): VerticalNavigationScope => ({
            collapsed,
            collapse: () => setCollapsed(!collapsed)
        });

        children = typeof children === 'function'
            ? (children as (scope: VerticalNavigationScope) => React.ReactNode)(makeScope())
            : children;

        return (
            <div
                ref={ref}
                className={clsx(
                    'vertical-navigation-container',
                    collapsed && 'is-collapsed',
                    variant && `navigation-${variant}`,
                    className
                )}
            >
                {children}
            </div>
        )
    });

VerticalNavigation.displayName = 'VerticalNavigation';
VerticalNavigation.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.string
}

VerticalNavigation.Top = NavigationTop;
VerticalNavigation.List = NavigationList;
VerticalNavigation.Item = NavigationListItem;
VerticalNavigation.Divider = NavigationDivider;


export default VerticalNavigation;
