import { ReactElement } from 'react';

// TODO (nmelnikov 2020-08-05): think of a different logic for establishing child's type
export const getElementName = (element: ReactElement): string | null => {
    const elementName =
        // @ts-ignore
        element?.target?.displayName ||
        // @ts-ignore
        element?.type?.displayName ||
        element?.type;

    return typeof elementName === 'string' ? elementName : null;
};
