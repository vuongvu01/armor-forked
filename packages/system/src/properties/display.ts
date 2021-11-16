import { CSSChunkType } from '../type';

export type DisplayPropsType = {
    /**
     * @armor-docs-group display
     * @ignore
     */
    display?:
        | 'initial'
        | 'inherit'
        | 'flex'
        | 'inline-flex'
        | 'block'
        | 'inline-block'
        | 'inline';
};

// export const displayPropertyList = {
//     display: true,
// };

export const displayProps = ({ display }: DisplayPropsType): CSSChunkType =>
    display !== undefined ? `display: ${display};` : '';
