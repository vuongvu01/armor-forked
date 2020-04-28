export type TextAlignmentAttributesType = {
    textAlign?: 'left' | 'middle' | 'right';
};

export const textAlignmentAttributes = ({
    textAlign,
}: TextAlignmentAttributesType) =>
    textAlign ? `text-align: ${textAlign};` : '';
