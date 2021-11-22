/**
 * @deprecated
 * @use Record<string, any>
 */
export interface ObjectLiteral<P = any> {
    [k: string]: P;
}

/**
 * @deprecated
 */
export type Indexed<O, P = any> = O & ObjectLiteral<P>;
