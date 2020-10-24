import * as React from 'react';
import Panel from '@/components/Panel';
import clsx from 'clsx';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
}

const PageHeader = ({
    children,
    className,
    title
}: React.PropsWithChildren<PageHeaderProps>): React.ReactElement => (
    <Panel
        className={clsx(
            'page-header',
            title && 'with-title',
            className
        )}
    >
        {title && (
            <div
                className={clsx(
                    'page-header-title'
                )}
            >
                <h1>{title}</h1>
            </div>
        )}
        {children}
    </Panel>
);

export default PageHeader;
