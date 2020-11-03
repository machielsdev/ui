import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Variant } from '@/components';

export type ButtonComponentTypes = 'button' | 'a';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    as?: ButtonComponentTypes;
    variant: Variant | string;
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
    block?: boolean;
    small?: boolean;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>((
    {
        as: Component = 'button',
        children,
        className,
        variant,
        iconLeft,
        iconRight,
        block,
        small,
        ...rest
    },
    ref
): React.ReactElement => {
    return (
        <Component
            ref={ref as React.RefObject<any>}
            className={clsx(
                'btn',
                `btn-${variant}`,
                block &&'btn-block',
                small && 'btn-small',
                className
            )}
            {...rest}
        >
            {iconLeft && (
                <div className="icon-container icon-left">
                    {iconLeft}
                </div>
            )}
            <span className="btn-text">{children}</span>
            {iconRight && (
                <div className="icon-container icon-right">
                    {iconRight}
                </div>
            )}
        </Component>
    );
});

Button.displayName = 'Button';
Button.propTypes = {
    as: PropTypes.oneOf(['button', 'a']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.string.isRequired,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    block: PropTypes.bool,
    small: PropTypes.bool
};

export default Button;
