import React from 'react';
import { Button, Dialog } from '../../components';
import { withStyles } from '../with-styles';
import {
    DialogStyleOverrideType,
    DialogAttributeOverrideType,
    DialogPropsType,
} from '../../components/Dialog/type';

export default {
    title: 'Styling/withStyles',
    component: Button,
    decorators: [],
    parameters: {},
};

const withStylesDialog = withStyles<
    DialogStyleOverrideType,
    DialogAttributeOverrideType
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

const SuperCustomDialog = withStyles<DialogStyleOverrideType>({
    root: props => `border: ${props.theme.span(1)} dashed red;`,
    buttonYes: {
        root: props => `border: ${props.theme.span(1)} dashed red;`,
    },
})<DialogPropsType>(Dialog);

export const Custom1 = () => <CustomDialog megaprop="lala" />;
export const Custom2 = () => <CustomDialogAlt />;
export const Custom3 = () => <SuperCustomDialog megaprop="7" />;
