import { HTMLAttributes } from 'react';

import { WidthPropsType, ThemeType } from '@deliveryhero/armor-system';

export type ComponentElementStylePropsType = Partial<{
    className: string;
    theme: ThemeType;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    WidthPropsType;
