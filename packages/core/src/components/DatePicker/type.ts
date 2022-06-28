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
    /**
     * If set to true, the "apply" button will appear.
     */
    enableApplyButton: boolean;
    /**
     * If set to true, the "clear selection" button will appear.
     */
    enableClearSelectionButton: boolean;
    /**
     * If set to true, the "today" button will appear.
     *  __NOTE__ - This property only works with DatePicker, thus for DateRangePicker you should avoid it
     */
    enableTodayButton: boolean;

    /** Being set to true, enables a time picker widget that allows to select time. */
    enableTimePicker: boolean;
    /**
     * If set to true, the dropdown will be closed on select.
     */
    enableCloseOnSelect: boolean;
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

    /** A callback that is triggered when a mouse enters the button of a day. An instance of the Date object comes as an argument. */
    onDayMouseEnter: (date: Date) => void;
    /** A callback that is triggered when a mouse leaves the button of a day. An instance of the Date object comes as an argument. */
    onDayMouseLeave: (date: Date) => void;

    /**
     * Specifies date ranges that are available for selection. Accepts dates in local timezone. A special value *current* means that this value will be replaced by the current datetime at run-time. *Null* means "infinity".
     *
     * If this property is defined, all dates that are outside of the specified range are rendered as unselectable.
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
    /**
     * A callback function called for every date in the calendar to indicate if the date is *allowed* or not. "Not allowed" dates are rendered as unselectable. The date comes in a local timezone.
     */
    isDateAllowed: (date: Date) => boolean;

    /**
     * Specifies date ranges that are available for selection. Accepts dates in local timezone. A special value *current* means that this value will be replaced by the current datetime at run-time. *Null* means "infinity".
     *
     * If this property is defined, all dates that are outside of the specified range are rendered as unselectable and stroke-through.
     *
     * ~~~typescript example title:"Allows future dates, starting from today"
     * <#COMPONENT_NAME# freeDateRanges={[['current', null]]} />
     * ~~~
     *
     * ~~~typescript example title:"Allows one day before and one day after the current one"
     * <#COMPONENT_NAME# freeDateRanges={[['current-1', 'current+1']]} />
     * ~~~
     *
     * @armor-docs-expand DateRangeEdgeType
     */
    freeDateRanges: [DateRangeEdgeType, DateRangeEdgeType][];
    /**
     * A callback function called for every date in the calendar to indicate if the date is *free* or not. "Not free" dates are rendered as unselectable and stroke-through. The date comes in a local timezone.
     */
    isDateFree: (date: Date) => boolean;

    /** Defines a date the #COMPONENT_NAME# will consider to be current */
    currentDate: Date;

    // special data properties
    'data-testid-input': string;

    /**
     * Being set to true, enables action buttons "Cancel" and "Apply" to confirm the choice before applying.
     * @deprecated
     * @see enableApplyButton
     */
    enableActionButtons: boolean;

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

    /** Enable input mask for datepicker.
     *  __NOTE__ - If __inputMaskEnabled__ is passed along with the prop __formatDateTime__ then __inputMaskEnabled__ will be ignored.
     */
    inputMaskEnabled: boolean;

    /** If set to true, the spacing of the component will be increased to match the *large* scale */
    large: boolean;
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
