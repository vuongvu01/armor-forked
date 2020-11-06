export type Nullable<X = any> = X | null;

export interface ObjectLiteralType<P = any> {
    [k: string]: P;
}

export type Indexed<O, P = any> = O & ObjectLiteralType<P>;
