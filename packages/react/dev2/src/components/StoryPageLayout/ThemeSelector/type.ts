export type ThemeSelectorProps = {
    themeName: string | null;
    themeNames: string[];
    onThemeChange: (newThemeName: string | null) => void;
};
