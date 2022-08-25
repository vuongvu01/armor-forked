type Category = string;

type IllustrationName = string;

export type IllustrationSource = { name: string; path: string };

export type CategoryWithIllustrations = Record<
    Category,
    Record<IllustrationName, IllustrationSource>
>;

export type SvgPathAttributes = {
    d?: string | null;
    transform?: string | null;
    fill?: string | null;
};
