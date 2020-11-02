import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    actions?: Array<React.ReactNode> | React.ReactNode | null;
    title?: string;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>((
    {
        actions,
        children,
        className,
        title
    },
    ref
): React.ReactElement => {
    actions = React.Children.map<React.ReactNode, React.ReactNode>(
        actions,
        (child: React.ReactNode) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    ...child.props,
                    className: clsx(child.props.className, 'card-header-action')
                })
            }

            return undefined;
        }
    );

    return (
        <div
            ref={ref}
            className={clsx(
                'card-header',
                className
            )}
        >
            {title && (
                <div
                    className={clsx(
                        'card-title'
                    )}
                >
                    {title}
                </div>
            )}
            {actions && (
                <div className="card-header-actions">
                    {actions}
                </div>
            )}
            {children}
        </div>
    );
});

CardHeader.displayName = 'CardHeader';
CardHeader.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.node),
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string
}

export default CardHeader;
