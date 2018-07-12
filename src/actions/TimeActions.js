import { CURRENT_TIME, RESTART_TIME } from './types';

export const restartTime = (number) => {
    return {
        type: RESTART_TIME,
        payload: number
    };
};
export const loadCurrentTime = () => {
    const currentTime = Math.abs(new Date());
    return {
        type: CURRENT_TIME,
        payload: currentTime
    };
};
