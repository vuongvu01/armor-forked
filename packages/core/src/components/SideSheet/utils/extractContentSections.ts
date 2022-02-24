import { Children, ReactElement } from 'react';
import { getElementName } from '@deliveryhero/armor-system';

import { SIDE_SHEET_HEADER_CLASS_PREFIX } from '../SideSheetHeader';
import { SIDE_SHEET_BODY_CLASS_PREFIX } from '../SideSheetBody';
import { SIDE_SHEET_FOOTER_CLASS_PREFIX } from '../SideSheetFooter';
import { ChildrenType } from '../../../type';

export const extractContentSections = (children: ChildrenType) => {
    const sections: {
        header: ReactElement | null;
        body: ReactElement | null;
        footer: ReactElement | null;
    } = { header: null, body: null, footer: null };

    if (!children) {
        return sections;
    }

    Children.forEach(children, (child) => {
        const childName = getElementName(child);

        if (childName === SIDE_SHEET_HEADER_CLASS_PREFIX) {
            sections.header = child;
        }

        if (childName === SIDE_SHEET_BODY_CLASS_PREFIX) {
            sections.body = child;
        }

        if (childName === SIDE_SHEET_FOOTER_CLASS_PREFIX) {
            sections.footer = child;
        }
    });

    return sections;
};
