import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Panel, Variant } from '@/components';

export enum Position {
    LEFT = 'left',
    RIGHT = 'right'
}

export interface PageSideProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: Position | string;
    spaced?: boolean;
    fixed?: boolean;
    variant?: Variant | string;
}

const PageSide = React.forwardRef<HTMLDivElement, PageSideProps>((
    {
        children,
        className,
        position,
        spaced,
        fixed,
        variant
    },
    ref
): React.ReactElement => (
    <Panel
        ref={ref}
        className={clsx(
            'page-side',
            position && `page-side-${position}`,
            fixed && 'page-side-fixed',
            className
        )}
        spaced={spaced}
        variant={variant}
    >
        {children}
    </Panel>
));

PageSide.displayName = 'Side';
PageSide.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.string,
    spaced: PropTypes.bool,
    fixed: PropTypes.bool,
    variant: PropTypes.string
}

export default PageSide;
