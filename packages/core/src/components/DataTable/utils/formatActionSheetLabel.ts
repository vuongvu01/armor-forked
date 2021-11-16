import { pluralize, ScalarType } from '@deliveryhero/armor-system';

export const formatActionSheetLabel = (selectedRows: ScalarType[]) => {
    return selectedRows.length
        ? `${selectedRows.length} ${pluralize(
              selectedRows.length,
              'item',
              'items',
          )} selected`
        : undefined;
};
