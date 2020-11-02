import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconName } from '@/components/Icon/IconName';

interface IconProps extends React.HTMLAttributes<HTMLElement> {
    icon: IconName | string;
}

const Icon = React.forwardRef<HTMLElement, IconProps>((
    {
        className,
        icon
    },
    ref
): React.ReactElement => (
    <i
        ref={ref}
        className={clsx(
            'cui-icon',
            `cui-icon-${icon}`,
            className
        )}
    />
));

Icon.displayName = 'Icon';
Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired
}

export default Icon;
