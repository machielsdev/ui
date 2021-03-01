import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PaneContent from './Content';
import { ForwardComponentWithStatics } from '../utils';
import { PaneContainer } from './index';

export type PaneStatics = {
    Content: typeof PaneContent;
    Container: typeof PaneContainer;
}

export interface PaneProps extends React.HTMLAttributes<HTMLDivElement> {
    horizontal?: boolean;
}

// Static properties are not given yet, when declaring the card const. Therefore, the error saying
// that Pane is missing above PaneStatics properties. These will defined after the pane component
// is defined.
// @ts-ignore
const Pane: ForwardComponentWithStatics<HTMLDivElement, PaneProps, PaneStatics> = React.forwardRef<HTMLDivElement, PaneProps>((
    {
        children,
        className,
        horizontal
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'pane',
            horizontal && 'horizontal',
            className
        )}
    >
        {children}
    </div>
));

Pane.displayName = 'Pane';
Pane.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    horizontal: PropTypes.bool
}

Pane.Content = PaneContent;
Pane.Container = PaneContainer;

export default Pane;
