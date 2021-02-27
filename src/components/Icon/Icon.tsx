import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconName } from './IconName';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    icon: IconName | string;
    size?: string | number;
}

const Icon = React.forwardRef<HTMLElement, IconProps>((
    {
        className,
        icon,
        size
    },
    ref
): React.ReactElement => (
    <i
        ref={ref}
        className={clsx(
            'icon',
            `icon-${icon}`,
            size && `icon-size-${size}`,
            className
        )}
    />
));

Icon.displayName = 'Icon';
Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Icon;
