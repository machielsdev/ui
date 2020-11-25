import * as React from 'react';
import PropTypes from 'prop-types';
import { Variant } from '@/components';
import clsx from 'clsx';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    variant: Variant | string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>((
    {
        children,
        className,
        variant
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'tag',
            `tag-${variant}`,
            className
        )}
    >
        {children}
    </div>
));

Tag.displayName = 'Tag';
Tag.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.string.isRequired
}

export default Tag;
