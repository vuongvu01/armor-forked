import React from 'react';
import { Button, Dialog } from '../../components';
import { withStyles } from '../with-styles';
import {
    StyleOverrideDialogType,
    AttributeOverrideDialogType,
    PropsDialogType,
} from '../../components/Dialog/type';

export default {
    title: 'Styling/withStyles',
    component: Button,
    decorators: [],
    parameters: {},
};

const withStylesDialog = withStyles<
    StyleOverrideDialogType,
    AttributeOverrideDialogType
>(
    {
        root: props => `border: ${props.theme.span(1)} dashed red;`,
        buttonYes: {
            root: props => `border: ${props.theme.span(1)} dashed red;`,
        },
    },
    {
        buttonYes: {
            secondary: true,
        },
    },
);

const CustomDialog = withStylesDialog(Dialog);
const CustomDialogAlt = withStylesDialog(Dialog);

const SuperCustomDialog = withStyles<StyleOverrideDialogType>({
    root: props => `border: ${props.theme.span(1)} dashed red;`,
    buttonYes: {
        root: props => `border: ${props.theme.span(1)} dashed red;`,
    },
})<PropsDialogType>(Dialog);

export const Custom1 = () => <CustomDialog megaprop="lala" />;
export const Custom2 = () => <CustomDialogAlt />;
export const Custom3 = () => <SuperCustomDialog megaprop="7" />;
