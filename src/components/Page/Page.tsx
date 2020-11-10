import * as React from 'react';
import clsx from 'clsx';
import PageHeader from '@/components/Page/Header';
import PageContent from '@/components/Page/Content';
import PageMain from '@/components/Page/Main';
import Side from '@/components/Page/Side';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    sticky?: boolean;
}

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
Page.Side = Side;
Page.Main = PageMain;

export default Page;
