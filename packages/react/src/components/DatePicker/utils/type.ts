import { DateVector } from './DateVector';

export type DateVectorStructureType = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
};

export type DateVectorMetaParams = {
    currentDateVector?: DateVector;
};
