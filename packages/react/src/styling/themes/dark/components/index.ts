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
import { getOverlayOverride } from './Overlay';
import { getDialogOverride, getDialogTitleOverride } from './Dialog';
import { getSideSheetOverride } from './SideSheet';
import { getDropdownBeforeSectionClearButtonOverride } from './DropdownBeforeSectionClearButton';
import { getOptionListItemOverride } from './OptionListItem';
import { getOptionListOverride } from './OptionList';

export const darkThemeComponentOverrides = {
    Accordion: getAccordionOverride,
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
    MenuElement: getMenuElementOverride,
    Menu: getMenuOverride,
    Overlay: getOverlayOverride,
    Tab: getTabOverride,
    Tag: getTagOverride,
    Tooltip: getTooltipOverride,
    TableRow: getTableRowOverride,
    TableCell: getTableCellOverride,
    TableExpandableSection: getTableExpandableSectionOverride,
    Message: getMessageOverride,
};
