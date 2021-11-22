import React, { Children } from 'react';
import { getElementName, ThemeType } from '@deliveryhero/armor-system';

import { SIDE_SHEET_HEADER_CLASS_PREFIX } from '../SideSheetHeader';
import { SIDE_SHEET_CLASS_PREFIX } from '../constants';
import { SIDE_SHEET_BODY_CLASS_PREFIX } from '../SideSheetBody';
import { SIDE_SHEET_FOOTER_CLASS_PREFIX } from '../SideSheetFooter';
import { ClassOverrideType } from '../type';
import { ChildrenType } from '../../../type';

/**
 * @deprecated
 */
export const extendChildrenWithProps = (
    children: ChildrenType,
    additionalProps: {
        classOverride?: ClassOverrideType;
        isFixed?: boolean;
        theme?: ThemeType;
    },
) => {
    if (!children) {
        return children;
    }
    const { classOverride, isFixed, theme } = additionalProps;

    let className: string;

    return Children.map(children, child => {
        const childName = getElementName(child);

        if (
            childName &&
            ![
                SIDE_SHEET_HEADER_CLASS_PREFIX,
                SIDE_SHEET_BODY_CLASS_PREFIX,
                SIDE_SHEET_FOOTER_CLASS_PREFIX,
            ].includes(childName)
        ) {
            // eslint-disable-next-line no-console
            console.warn(
                `Only ${SIDE_SHEET_HEADER_CLASS_PREFIX}, ${SIDE_SHEET_HEADER_CLASS_PREFIX} or ${SIDE_SHEET_FOOTER_CLASS_PREFIX} components can be used as children of ${SIDE_SHEET_CLASS_PREFIX}`,
            );
        }

        if (classOverride) {
            switch (childName) {
                case SIDE_SHEET_HEADER_CLASS_PREFIX:
                    className = classOverride.Header;
                    break;
                case SIDE_SHEET_BODY_CLASS_PREFIX:
                    className = classOverride.Body;
                    break;
                case SIDE_SHEET_FOOTER_CLASS_PREFIX:
                    className = classOverride.Footer;
                    break;
                default:
                    className = '';
            }
        }

        return React.cloneElement(child, { isFixed, theme, className });
    });
};
