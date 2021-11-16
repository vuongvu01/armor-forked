import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    WidthPropsType,
    ComponentBehaviourOpenStateType,
    ComponentBehaviourOverlayType,
    ComponentBehaviourPortalType,
} from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../type';

export type DateRangeEdgeType = Date | string | null;

export type DateValueType = Date;
export type DateValueRangeType = [Date, Date];
export type DateValueAdvancedRangeType = [DateRangeEdgeType, DateRangeEdgeType];

export type DatePickerEffectiveCommonPropsType = Partial<{
    /** Being set to true, enables action buttons "Cancel" and "Ok" to confirm the choice before applying. */
    enableActionButtons: boolean;
    /** Being set to true, enables a time picker widget that allows to select time. */
    enableTimePicker: boolean;
    /**
     * Being set to false, disables the component width auto-correction based on the length of a selected value.
     * This property is just a quick fix of the currently existing problem and will be removed in the future major releases.
     * @deprecated
     * */
    enableMinWidthAutoCorrection: boolean;

    /** Sets input label. */
    label: string;
    /** Sets the placeholder of a input */
    placeholder: string;
    /** If set to true, renders the component as disabled and prevents the dropdown from opening, and, therefore, value - from being updated. The dropdown can still be opened and the value changed programmatically though. */
    disabled: boolean;
    /** If set to true, renders the component as read-only and prevents the dropdown from opening. The dropdown can still be opened programmatically though. */
    readOnly: boolean;
    /** If set to true, renders the component as in the error state. */
    error: boolean;

    defaultMonthYearSelectorOpen: boolean;
    /**
     * Allows arbitrary formatting the selected date. Libraries like date-fns or momentjs can be used to perform the formatting through this callback.
     *
     * ~~~typescript example
     * import { format } from 'date-fns';
     *
     * <#COMPONENT_NAME#
     *      formatDateTime: (value: unknown) => format(
     *          value instanceof Date ? value : new Date(value as string),
     *          'hh:mm dd.MM.yyyy'
     *      ),
     * />
     * ~~~
     */
    formatDateTime: (value: Date) => string;
    /** A callback that is triggered when a mouse enters the button of a day. An instance of the Date object comes as an argument. */
    onDayMouseEnter: (date: Date) => void;
    /** A callback that is triggered when a mouse leaves the button of a day. An instance of the Date object comes as an argument. */
    onDayMouseLeave: (date: Date) => void;

    /**
     * Specifies date ranges that are available for selection. Accepts dates in local timezone. A special value *current* means that this value will be replaced by the current datetime at run-time. *Null* means "infinity".
     *
     * ~~~typescript example title:"Allows future dates, starting from today"
     * <#COMPONENT_NAME# allowedDateRanges={[['current', null]]} />
     * ~~~
     *
     * ~~~typescript example title:"Allows one day before and one day after the current one"
     * <#COMPONENT_NAME# allowedDateRanges={[['current-1', 'current+1']]} />
     * ~~~
     *
     * @armor-docs-expand DateRangeEdgeType
     */
    allowedDateRanges: [DateRangeEdgeType, DateRangeEdgeType][];
    /** Sets the date that the DatePicker will consider to be current */
    currentDate: Date;

    // special data properties
    'data-testid-input': string;

    // add other custom properties here
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType &
    WidthPropsType;

export type DatePickerEffectiveGenericPropsType<V> = Partial<{
    // todo: We do not take the standard onChange, value, defaultValue names here
    // todo: because the best way of making the API for a date picker
    // todo: is still a subject of practical experimenting.
    // todo: the following 3 properties may be deprecated in the future in favor of better onChange, value, defaultValue
    onDateValueChange: (dateValue: V | undefined | null) => void;
    dateValue: V | null;
    defaultDateValue: V | null;
}>;

export type DatePickerDropdownPropsType = {
    zIndex: number;
} & ComponentElementStylePropsType;

export type DatePickerArrowPropsType = {};

export type DatePickerTopBarMonthNavigationButtonForwardPropsType = {
    disabled: boolean;
} & ComponentElementStylePropsType;

export type DatePickerTopBarMonthYearSelectorTogglePropsType = {
    open: boolean;
} & ComponentElementStylePropsType;

export type DatePickerTopBarMonthYearSelectorToggleArrowPropsType = {
    open: boolean;
} & ComponentElementStylePropsType;
