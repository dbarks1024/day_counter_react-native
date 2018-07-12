import { CURRENT_TIME, RESTART_TIME } from './types';

export const restartTime = (number) => {
    return {
        type: RESTART_TIME,
        payload: number
    };
};
export const loadCurrentTime = () => {
    const year = new Date().getFullYear().toString();
    const month = new Date().getMonth().toString();
    const day = new Date().getDate().toString();
    
    const currentTime = year + month + day;
    console.log(currentTime);
    return {
        type: CURRENT_TIME,
        payload: currentTime
    };
};
