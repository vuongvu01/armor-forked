export type TextAlignmentAttributesType = {
    textAlign?: 'left' | 'middle' | 'right';
};

export const textAlignmentAttributesList = {
    textAlign: true,
};

export const textAlignmentAttributes = ({
    textAlign,
}: TextAlignmentAttributesType) =>
    textAlign ? `text-align: ${textAlign};` : '';
