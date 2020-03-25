export type WideAttributesType = {
    wide?: boolean;
};

export const wideAttributes = ({ wide }: WideAttributesType) =>
    wide ? 'width: 100%;' : '';
