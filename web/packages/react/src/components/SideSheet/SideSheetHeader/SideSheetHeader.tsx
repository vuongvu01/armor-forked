import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SideSheetHeaderPropsType } from './type';
import {
    descriptionTypographyStyle,
    SideSheetHeader as SideSheetHeaderRoot,
    titleTypographyStyle,
} from './style';
import { Typography } from '../../Typography';

export const SIDE_SHEET_HEADER_CLASS_PREFIX = 'SideSheetHeader';

export const SideSheetHeader: FunctionComponent<SideSheetHeaderPropsType> = ({
    description,
    theme,
    title,
    ...restProps
}) => {
    if (!description && !title) {
        return null;
    }

    return (
        <SideSheetHeaderRoot
            data-testid="SideSheetHeader"
            theme={theme}
            {...restProps}
        >
            {title ? (
                <Typography sectionTitle style={titleTypographyStyle}>
                    {title}
                </Typography>
            ) : null}
            {description ? (
                <Typography paragraph large style={descriptionTypographyStyle}>
                    {description}
                </Typography>
            ) : null}
        </SideSheetHeaderRoot>
    );
};

SideSheetHeader.displayName = SIDE_SHEET_HEADER_CLASS_PREFIX;

SideSheetHeader.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
