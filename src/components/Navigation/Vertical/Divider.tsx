import * as React from 'react';

type NavigationDividerProps = React.HTMLAttributes<HTMLDivElement>;

const NavigationDivider = React.forwardRef<HTMLDivElement, NavigationDividerProps>((
    _,
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className="vertical-navigation-divider"
    />
));

NavigationDivider.displayName = 'NavigationDivider';

export default NavigationDivider;
