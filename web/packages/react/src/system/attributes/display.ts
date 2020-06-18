export type DisplayAttributesType = {
    display?:
        | 'initial'
        | 'inherit'
        | 'flex'
        | 'inline-flex'
        | 'block'
        | 'inline-block'
        | 'inline';
};

export const displayAttributesList = {
    display: true,
};

export const displayAttributes = ({ display }: DisplayAttributesType) =>
    display !== undefined ? `display: ${display};` : '';
