import * as React from 'react';
import PropTypes from 'prop-types';
import { Variant } from '@/components';
import PageSide, { Position } from '@/components/Page/Side';

export interface PageRightProps extends React.HTMLAttributes<HTMLDivElement> {
    spaced?: boolean;
    fixed?: boolean;
    variant?: Variant | string;
}

const PageRight = React.forwardRef<HTMLDivElement, PageRightProps>((
    {
        children,
        className,
        fixed,
    },
    ref
): React.ReactElement => (
    <PageSide
        ref={ref}
        position={Position.RIGHT}
        className={className}
        fixed={fixed}
    >
        {children}
    </PageSide>
));

PageRight.displayName = 'PageRight';
PageRight.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,

}

export default PageRight;
