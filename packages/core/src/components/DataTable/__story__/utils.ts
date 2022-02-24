import { ObjectLiteralType } from '../../../type';

export const multiplyDataRows = (
    blockCount = 1,
    what: Array<{ id: string } & ObjectLiteralType> = [],
) => {
    let data: typeof what = [];
    for (let i = 0; i < blockCount; i += 1) {
        data = [
            ...data,
            ...what.map((item) => ({
                ...item,
                id: `${item.id}_${i}`,
            })),
        ];
    }

    return data;
};
