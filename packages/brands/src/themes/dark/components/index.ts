import { getAccordionOverride } from './Accordion';
import { getButtonOverride } from './Button';
import {
    getHeaderNavigationActionItemOverride,
    getHeaderNavigationItemOverride,
    getHeaderNavigationLinkOverride,
    getHeaderNavigationMenuContentBodyOptionsOverride,
    getHeaderNavigationMenuContentHeaderOverride,
    getHeaderNavigationMenuOverride,
    getHeaderNavigationOverride,
    getHeaderNavigationSearchOverride,
    getHeaderNavigationSelectorDropdownOverride,
    getHeaderNavigationSelectorOverride,
    getHeaderNavigationTitleOverride,
} from './HeaderNavigation';
import { getPageNavigationOverride } from './PageNavigation';
import { getTextInputOverride } from './TextInput';
import { getTypographyOverride } from './Typography';
import { getCheckboxOverride } from './Checkbox';
import { getRadioOverride } from './Radio';
import { getSwitchOverride } from './Switch';
import { getMenuElementOverride } from './Navigation/MenuElement';
import { getMenuOverride } from './Navigation/Menu';
import { getTableRowOverride } from './Table/TableRow';
import { getTableCellOverride } from './Table/TableCell';
import { getTableExpandableSectionOverride } from './Table/TableExpandableSection';
import { getMessageOverride } from './Message';
import {
    getSearchClearActionOverride,
    getSearchEmptySuggestionsListOverride,
    getSearchOverride,
    getSearchSuggestionItemOverride,
} from './Search';
import { getTabOverride } from './Tab';
import { getTagOverride } from './Tag';
import { getTooltipOverride } from './Tooltip';
import { getBackdropOverride } from './Backdrop';
import { getDialogOverride, getDialogTitleOverride } from './Dialog';
import { getSideSheetOverride } from './SideSheet';
import { getDropdownBeforeSectionClearButtonOverride } from './DropdownBeforeSectionClearButton';
import { getOptionListItemOverride } from './OptionList/OptionListItem';
import { getOptionListOverride } from './OptionList/OptionList';
import { makeDatePickerOverride } from './DatePicker';
import { getContextMenuOverride } from './ContextMenu';
import { getIconButtonOverride } from './IconButton';
import { getTableCheckboxCellOverride } from './Table/TableCheckboxCell';
import { getTableHeadCellOverride } from './Table/TableHeadCell';
import { getLinkOverride } from './Link';
import { getListItemOverride } from './List/ListItem';
import { getListItemPrimarySectionOverride } from './List/ListItemPrimarySection';
import { getCloseButtonOverride } from './CloseButton';
import { getTableControllerCellOverride } from './Table/TableControllerCell';
import { getActionSheetOverride } from './ActionSheet/ActionSheet';
import { getStepOverride } from './Stepper/Step';
import { getIndicatorOverride } from './Indicator';
import { getEmptyStateOverride } from './EmptyState';
import { getExpansionIndicatorOverride } from './ExpansionIndicator';
import { getSkeleton } from './Skeleton';

export const darkThemeComponentOverrides = {
    Accordion: getAccordionOverride,
    ActionSheet: getActionSheetOverride,
    Button: getButtonOverride,
    Dialog: getDialogOverride,
    DialogTitle: getDialogTitleOverride,
    DropdownBeforeSectionClearButton: getDropdownBeforeSectionClearButtonOverride,
    OptionListItem: getOptionListItemOverride,
    OptionList: getOptionListOverride,
    HeaderNavigation: getHeaderNavigationOverride,
    HeaderNavigationActionItem: getHeaderNavigationActionItemOverride,
    HeaderNavigationItem: getHeaderNavigationItemOverride,
    HeaderNavigationLink: getHeaderNavigationLinkOverride,
    HeaderNavigationMenu: getHeaderNavigationMenuOverride,
    HeaderNavigationMenuContentBodyOptions: getHeaderNavigationMenuContentBodyOptionsOverride,
    HeaderNavigationMenuContentHeader: getHeaderNavigationMenuContentHeaderOverride,
    HeaderNavigationSearch: getHeaderNavigationSearchOverride,
    HeaderNavigationSelector: getHeaderNavigationSelectorOverride,
    HeaderNavigationSelectorDropdown: getHeaderNavigationSelectorDropdownOverride,
    HeaderNavigationTitle: getHeaderNavigationTitleOverride,
    PageNavigation: getPageNavigationOverride,
    Search: getSearchOverride,
    SearchClearAction: getSearchClearActionOverride,
    SearchEmptySuggestionsList: getSearchEmptySuggestionsListOverride,
    SearchSuggestionItem: getSearchSuggestionItemOverride,
    SideSheet: getSideSheetOverride,
    TextInput: getTextInputOverride,
    Typography: getTypographyOverride,
    Checkbox: getCheckboxOverride,
    Radio: getRadioOverride,
    Switch: getSwitchOverride,
    Skeleton: getSkeleton,
    MenuElement: getMenuElementOverride,
    Menu: getMenuOverride,
    Backdrop: getBackdropOverride,
    Tab: getTabOverride,
    Tag: getTagOverride,
    Tooltip: getTooltipOverride,
    TableRow: getTableRowOverride,
    TableCell: getTableCellOverride,
    TableCheckboxCell: getTableCheckboxCellOverride,
    TableControllerCell: getTableControllerCellOverride,
    TableHeadCell: getTableHeadCellOverride,
    TableExpandableSection: getTableExpandableSectionOverride,
    Message: getMessageOverride,
    ...makeDatePickerOverride(),
    ContextMenu: getContextMenuOverride,
    IconButton: getIconButtonOverride,
    Link: getLinkOverride,
    CloseButton: getCloseButtonOverride,
    ListItem: getListItemOverride,
    ListItemPrimarySection: getListItemPrimarySectionOverride,
    Step: getStepOverride,
    Indicator: getIndicatorOverride,
    EmptyState: getEmptyStateOverride,
    ExpansionIndicator: getExpansionIndicatorOverride,
};
