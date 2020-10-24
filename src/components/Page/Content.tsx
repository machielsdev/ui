import * as React from 'react';
import clsx from 'clsx';

type PageContentProps = React.HTMLAttributes<HTMLDivElement>;

const PageContent = ({
    children,
    className
}: React.PropsWithChildren<PageContentProps>): React.ReactElement => (
    <div
        className={clsx(
            'page-content',
            className
        )}
    >
        {children}
    </div>
);

export default PageContent;
