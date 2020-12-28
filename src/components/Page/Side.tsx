import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Variant } from '@/components';

export enum Position {
    LEFT = 'left',
    RIGHT = 'right'
}

export interface PageSideProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: Position | string;
    fixed?: boolean;
    variant?: Variant | string;
}

const PageSide = React.forwardRef<HTMLDivElement, PageSideProps>((
    {
        children,
        className,
        position,
        fixed,
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'page-side',
            position && `page-side-${position}`,
            fixed && 'page-side-fixed',
            className
        )}
    >
        {children}
    </div>
));

PageSide.displayName = 'Side';
PageSide.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.string,
    fixed: PropTypes.bool,
    variant: PropTypes.string
}

export default PageSide;
