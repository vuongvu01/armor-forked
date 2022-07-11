type Category = string;

type Icon = string;

export type IconSize = { name: string; path: string; size: string };

export type CategoryWithIcons = Record<Category, Record<Icon, IconSize[]>>;

export type SvgPathAttributes = {
    d?: string | null;
    transform?: string | null;
};
