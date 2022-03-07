import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    WidthPropsType,
    HeightPropsType,
    ColorPropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type ProgressBarEffectivePropsType = Partial<{
    /** The current progress (between 1-100%) */
    progress: number;
    /** Some presets for theming */
    preset: ProgressBarPresetType;
    /** Progress bar auto run mode */
    autoRun: boolean;
    /** auto run mode duration */
    duration: number;
    /** Run reversely in auto run mode */
    reverse: boolean;
    /** Finish event in auto run mode */
    onFinish: () => void;
    /** Put the progress bar auto run on hold */
    isPaused: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    ColorPropsType &
    MarginPropsType &
    WidthPropsType &
    HeightPropsType;

export type ProgressBarPropsType = ProgressBarEffectivePropsType &
    ComponentStylePropsType;

export type ProgressBarRootPropsType = ProgressBarEffectivePropsType &
    ComponentElementStylePropsType;

export type ProgressBarIndicatorPropsType = {
    progress: number;
    preset?: ProgressBarPresetType;
} & ColorPropsType &
    HeightPropsType &
    ComponentElementStylePropsType;

export type ProgressBarPresetType =
    | 'success'
    | 'info'
    | 'error'
    | 'warning'
    | 'fileUpload';
