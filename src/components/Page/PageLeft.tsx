import * as React from 'react';
import PropTypes from 'prop-types';
import { Variant } from '@/components';
import PageSide, { Position } from '@/components/Page/Side';

export interface PageLeftProps extends React.HTMLAttributes<HTMLDivElement> {
    fixed?: boolean;
    variant?: Variant | string;
}

const PageLeft = React.forwardRef<HTMLDivElement, PageLeftProps>((
    {
        children,
        className,
        fixed,
    },
    ref
): React.ReactElement => (
    <PageSide
        ref={ref}
        position={Position.LEFT}
        className={className}
        fixed={fixed}
    >
        {children}
    </PageSide>
));

PageLeft.displayName = 'PageLeft';
PageLeft.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    variant: PropTypes.string
}

export default PageLeft;
