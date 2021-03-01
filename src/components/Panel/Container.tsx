import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export interface PanelContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    vertical?: boolean;
}

const PanelContainer = React.forwardRef<HTMLDivElement, PanelContainerProps>((
    {
        children,
        vertical
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'pane-container',
            vertical && 'vertical'
        )}
    >
        {children}
    </div>
));

PanelContainer.displayName = 'PanelContainer';
PanelContainer.propTypes = {
    children: PropTypes.node,
    vertical: PropTypes.bool
}

export default PanelContainer;
