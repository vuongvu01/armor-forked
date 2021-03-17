import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SideSheetHeaderPropsType } from './type';
import {
    descriptionTypographyStyle,
    SideSheetHeader as SideSheetHeaderRoot,
    SideSheetHeaderTypography,
} from './style';
import { Typography } from '../../Typography';
import { sideSheetHeader } from '../constants';

export const SIDE_SHEET_HEADER_CLASS_PREFIX = 'SideSheetHeader';

export const SideSheetHeader: FunctionComponent<SideSheetHeaderPropsType> = ({
    description,
    theme,
    title,
    ...restProps
}) => {
    return (
        <SideSheetHeaderRoot
            data-testid={sideSheetHeader}
            {...restProps}
            theme={theme}
        >
            {title ? (
                <SideSheetHeaderTypography sectionTitle theme={theme}>
                    {title}
                </SideSheetHeaderTypography>
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
