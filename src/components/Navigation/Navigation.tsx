import * as React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@/components';
import clsx from 'clsx';

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    sticky?: boolean;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>((
    {
        children,
        className,
        sticky
    },
    ref
): React.ReactElement => (
    <Panel
        className="navigation"
    >
        <nav
            ref={ref}
            className={clsx(
                'navigation-list',
                sticky && 'navigation-sticky',
                className
            )}
        >
            {children}
        </nav>
    </Panel>
));

Navigation.displayName = 'PageNavigation';
Navigation.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    sticky: PropTypes.bool
}

export default Navigation;
