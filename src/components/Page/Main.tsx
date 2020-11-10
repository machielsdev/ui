import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

type PageMainProps = React.HTMLAttributes<HTMLDivElement>;

const PageMain = React.forwardRef<HTMLDivElement, PageMainProps>((
    {
        children,
        className
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'page-main',
            className
        )}
    >
        {children}
    </div>
));

PageMain.displayName = 'PageMain';
PageMain.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default PageMain;
