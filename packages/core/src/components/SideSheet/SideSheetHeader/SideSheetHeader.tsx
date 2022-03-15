import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { SideSheetHeaderPropsType } from './type';
import {
    SideSheetHeaderRoot,
    SideSheetHeaderTitle,
    SideSheetHeaderDescription,
} from './style';
import { useSideSheetHeader } from './hooks/useSideSheetHeader';
import { useSideSheetHeaderClassNames } from './hooks/useSideSheetHeaderClassNames';

export const SIDE_SHEET_HEADER_CLASS_PREFIX = 'SideSheetHeader';

/**
 * @armor-docs-component
 */
export const SideSheetHeader: FC<SideSheetHeaderPropsType> = ({
    className,
    ...props
}) => {
    const classNames = useSideSheetHeaderClassNames(
        SIDE_SHEET_HEADER_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        title,
        description,
        children,
        showTitle,
        showDescription,
    } = useSideSheetHeader(props);

    return (
        <SideSheetHeaderRoot {...rootProps} className={classNames.Root}>
            {children}
            {showTitle && (
                <SideSheetHeaderTitle className={classNames.Title}>
                    {title}
                </SideSheetHeaderTitle>
            )}
            {showDescription && (
                <SideSheetHeaderDescription className={classNames.Description}>
                    {description}
                </SideSheetHeaderDescription>
            )}
        </SideSheetHeaderRoot>
    );
};

SideSheetHeader.displayName = SIDE_SHEET_HEADER_CLASS_PREFIX;

SideSheetHeader.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
