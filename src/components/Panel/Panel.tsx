import * as React from 'react';
import clsx from 'clsx';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    spaced?: boolean;
}

const Panel = ({
    children,
    className,
    spaced
}: React.PropsWithChildren<PanelProps>): React.ReactElement => (
    <div
        className={clsx(
            'panel',
            spaced && 'panel-spaced',
            className
        )}
    >
        {children}
    </div>
);

export default Panel;
