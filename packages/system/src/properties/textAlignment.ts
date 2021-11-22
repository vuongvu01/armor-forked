import { CSSChunkType } from '../type';

export type TextAlignmentPropsType = {
    /**
     * Sets *CSS* `text-align` property of **.#COMPONENT_NAME#Root**
     * @armor-docs-group content_alignment
     */
    textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
};

// export const textAlignmentPropertiesList = {
//     textAlign: true,
// };

export const textAlignmentProps = ({
    textAlign,
}: TextAlignmentPropsType): CSSChunkType =>
    textAlign ? `text-align: ${textAlign};` : '';
