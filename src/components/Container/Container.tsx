import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>((
    {
        children,
        className,
        fluid
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            fluid ? 'container-fluid' : 'container',
            className
        )}
    >
        {children}
    </div>
));

Container.displayName = 'Container';
Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fluid: PropTypes.bool
}

export default Container;
