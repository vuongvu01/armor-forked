type WhatType = Array<{ id: string } & Record<string, any>>;

export const multiplyDataRows = (blockCount = 1, what: WhatType = []) => {
    let data: typeof what = [];
    for (let i = 0; i < blockCount; i += 1) {
        data = [
            ...data,
            ...what.map(item => ({
                ...item,
                id: `${item.id}_${i}`,
            })),
        ];
    }

    return data;
};
