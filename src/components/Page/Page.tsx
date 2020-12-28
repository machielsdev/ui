import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PageHeader from '@/components/Page/Header';
import PageContent from '@/components/Page/Content';
import PageMain from '@/components/Page/Main';
import Side from '@/components/Page/Side';
import PageRight from '@/components/Page/PageRight';
import PageLeft from '@/components/Page/PageLeft';
import { ForwardComponentWithStatics } from '@/components/utils/ForwardComponentWithStatics';
import PageSide from '@/components/Page/Side';

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    sticky?: boolean;
}

export interface PageStatics {
    Right: typeof PageRight;
    Left: typeof PageLeft;
    Header: typeof PageHeader;
    Content: typeof PageContent;
    Side: typeof PageSide;
    Main: typeof PageMain;
}

// Static properties are not given yet, when declaring the card const. Therefore, the error saying
// that Card is missing above CardStatics  properties. These will defined after the card component
// is defined.
// @ts-ignore
const Page: ForwardComponentWithStatics<HTMLDivElement, PageProps, PageStatics> = React.forwardRef(({
    children,
    className,
}): React.ReactElement => (
    <div
        className={clsx(
            'page',
            className
        )}
    >
        {children}
    </div>
));
Page.displayName = 'Page';
Page.Right = PageRight;
Page.Left = PageLeft;
Page.Header = PageHeader;
Page.Content = PageContent;
Page.Side = Side;
Page.Main = PageMain;

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Page;
