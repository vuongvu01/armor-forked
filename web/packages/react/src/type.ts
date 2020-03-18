export type ScalarType = string | number;

export type ObjectLiteralType<P = any> = {
    [k: string]: P;
};

export type ReturnEmptyStringFunctionType = () => string;
