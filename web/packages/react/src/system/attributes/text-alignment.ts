export type TextAlignmentAttributesType = {
    textAlignment?: 'left' | 'middle' | 'right';
};

export const textAlignmentAttributes = ({
    textAlignment,
}: TextAlignmentAttributesType) =>
    textAlignment ? `text-align: ${textAlignment};` : '';
