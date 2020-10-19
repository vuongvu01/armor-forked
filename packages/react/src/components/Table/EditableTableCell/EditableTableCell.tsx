import React, {
    FunctionComponent,
    forwardRef,
    useState,
    useEffect,
} from 'react';
// import PropTypes from 'prop-types';
import { TickCircleFilledIcon } from '@deliveryhero/armor-icons';
// import { useComponentTheme } from '../../../utils/hooks';

// import { useTheme } from '../../../styling';
// import { useEditableTableCellClassNames } from './utils/useEditableTableCellClassNames';
// import { EditableTableCellRoot } from './style';
import { EditableTableCellPropsType } from './type';
// import { editableTableCellDefaultTheme } from './theme';
// import {
//     editableTableCellRootTestId,
//     EDITABLE_TABLE_CELL_CLASS_PREFIX,
// } from './constants';
import { TableCell } from '../TableCell';
import { TextInput } from '../../TextInput';
import { Box } from '../../Box';
import { Button } from '../../Button';
// import {CheckMarkCircleIcon} from "../../../icons";

/**
 * @experimental
 */
export const EditableTableCell: FunctionComponent<EditableTableCellPropsType> = forwardRef(
    function EditableTableCell(
        {
            className,
            classNames,
            children,
            defaultValue,
            onChange,
            ...restProps
        },
        ref,
    ) {
        // const theme = useComponentTheme(EDITABLE_TABLE_CELL_CLASS_PREFIX, editableTableCellDefaultTheme);
        // const classNameComponents = useEditableTableCellClassNames(
        //     EDITABLE_TABLE_CELL_CLASS_PREFIX,
        //     className,
        //     classNames,
        // );

        const [edit, setEdit] = useState(false);
        const [value, setValue] = useState(defaultValue);
        useEffect(() => {
            if (edit) {
                setValue(defaultValue);
            }
        }, [edit]);

        return (
            <TableCell
                {...restProps}
                ref={ref}
                onClick={() => !edit && setEdit(true)}
                style={{ position: 'relative' }}
            >
                {edit && (
                    <Box
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Box wide marginTop={2.5}>
                            <TextInput
                                defaultValue={defaultValue}
                                onChange={onChange}
                            />
                            <Button
                                paddingX={3}
                                marginLeft={1}
                                onClick={() => {
                                    setEdit(false);
                                    if (onChange) {
                                        onChange(value);
                                    }
                                }}
                            >
                                <TickCircleFilledIcon />
                            </Button>
                        </Box>
                    </Box>
                )}
                <div style={{ visibility: edit ? 'hidden' : 'visible' }}>
                    {children}
                </div>
            </TableCell>
        );

        // return (
        //     <EditableTableCellRoot
        //         theme={theme}
        //         {...restProps}
        //         className={classNameComponents.Root}
        //         ref={ref}
        //         data-testid={editableTableCellRootTestId}
        //     />
        // );
    },
);

EditableTableCell.defaultProps = {};

/** prop-types are required here for run-time checks */
EditableTableCell.propTypes = {};