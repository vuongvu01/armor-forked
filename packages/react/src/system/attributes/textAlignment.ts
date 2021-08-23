export type TextAlignmentAttributesType = {
    /**
     * Sets *CSS* `text-align` property of **.#COMPONENT_NAME#Root**
     * @armor-docs-group content_alignment
     */
    textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
};

export const textAlignmentAttributesList = {
    textAlign: true,
};

export const textAlignmentAttributes = ({
    textAlign,
}: TextAlignmentAttributesType) =>
    textAlign ? `text-align: ${textAlign};` : '';
