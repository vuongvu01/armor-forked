import deepMerge from 'deepmerge';

/**
 * @internal
 */
export const merge = (
    dst: Record<string, any>, // todo: tighten
    src: Record<string, any>, // todo: tighten
): Record<string, any> /* todo: tighten */ =>
    deepMerge(dst, src || {}, {
        arrayMerge: (destinationArray: any[], sourceArray: any[]) =>
            sourceArray,
    });
