import { createContext } from 'react';
export interface NavigationContextProps {
    tooltipsWhenCollapsed: boolean;
    collapsed: boolean;
}

export const NavigationContext = createContext<NavigationContextProps>({
    tooltipsWhenCollapsed: true,
    collapsed: false
});
