import * as React from 'react';
import clsx from 'clsx';
import PageHeader from '@/components/Page/Header';
import PageContent from '@/components/Page/Content';

export type PageProps = React.HTMLAttributes<HTMLDivElement> ;

const Page = ({
    children,
    className,
}: React.PropsWithChildren<PageProps>): React.ReactElement => (
    <div
        className={clsx(
            'page',
            className
        )}
    >
        {children}
    </div>
);

Page.Header = PageHeader;
Page.Content = PageContent;

export default Page;
