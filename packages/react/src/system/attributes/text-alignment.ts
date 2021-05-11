export type TextAlignmentAttributesType = {
    textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
};

export const textAlignmentAttributesList = {
    textAlign: true,
};

export const textAlignmentAttributes = ({
    textAlign,
}: TextAlignmentAttributesType) =>
    textAlign ? `text-align: ${textAlign};` : '';
