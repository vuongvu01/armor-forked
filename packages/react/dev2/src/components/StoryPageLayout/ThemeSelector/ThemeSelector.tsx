import React, { FC, useCallback, MouseEvent } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ThemeSelectorRoot, ThemeSelectorButton } from './style';
import { ThemeSelectorProps } from './type';
import { ucFirst } from '../../../util/etc';

export const ThemeSelector: FC<ThemeSelectorProps> = ({
    themeName,
    themeNames,
    onThemeChange,
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const realThemeName = themeName ?? 'none';
    const onMenuItemClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const element = event.currentTarget;
            const themeNameFromElement = element.getAttribute(
                'data-theme-name',
            );

            onThemeChange(
                themeNameFromElement === '' ? null : themeNameFromElement,
            );
            handleClose();
        },
        [onThemeChange, handleClose],
    );

    return (
        <ThemeSelectorRoot>
            <ThemeSelectorButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="outlined"
                color="secondary"
            >
                Theme: {realThemeName}
            </ThemeSelectorButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={onMenuItemClick} data-theme-name="">
                    None
                </MenuItem>
                {themeNames.map(themeNameItem => (
                    <MenuItem
                        onClick={onMenuItemClick}
                        key={themeNameItem}
                        data-theme-name={themeNameItem}
                    >
                        {ucFirst(themeNameItem)}
                    </MenuItem>
                ))}
            </Menu>
        </ThemeSelectorRoot>
    );
};
