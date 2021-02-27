import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CardContent from './Content';
import { ForwardComponentWithStatics } from '../utils/ForwardComponentWithStatics';
import CardHeader from './Header';
import { Variant } from '../utils';

export type CardStatics = {
    Content: typeof CardContent;
    Header: typeof CardHeader;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: Variant | string;
}

// Static properties are not given yet, when declaring the card const. Therefore, the error saying
// that Card is missing above CardStatics  properties. These will defined after the card component
// is defined.
// @ts-ignore
const Card: ForwardComponentWithStatics<HTMLDivElement, CardProps, CardStatics> = React.forwardRef((
    {
        children,
        className,
        variant
    },
    ref
): React.ReactElement => (
    <div
        className={clsx(
            'card',
            variant && `card-${variant}`,
            className
        )}
        ref={ref}
    >
        {children}
    </div>
));

Card.displayName = 'Card';
Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string
};

Card.Content = CardContent;
Card.Header = CardHeader;

export default Card;
