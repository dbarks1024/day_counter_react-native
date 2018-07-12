import {
    AsyncStorage
} from 'react-native';
import {
    CURRENT_TIME,
    RESTART_TIME
} from './types';

export const restartTime = () => {
    storeData('last_restart', currentDate());
    return {
        type: RESTART_TIME,
        payload: 0
    };
};
export const loadCurrentTime = () => {
    return (dispatch) => {
        retrieveDateDifference('last_restart')
            .then((date) => {
                dispatch({
                    type: CURRENT_TIME,
                    payload: date
                });
            });
    };
};


const currentDate = () => {
    const year = new Date().getFullYear().toString();
    const month = '0' + new Date().getMonth().toString();
    const day = '0' + new Date().getDate().toString();

    return year + month.slice(-2) + day.slice(-2);
};

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        throw new Error(error);
    }
};

const retrieveDateDifference = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log('stored value: ' + value);
            return value - currentDate();
        }
        console.log('no value in storage');
        return 0;
    } catch (error) {
        throw new Error(error);
    }
};
