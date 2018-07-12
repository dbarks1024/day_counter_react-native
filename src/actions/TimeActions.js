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
        payload: currentDate()
    };
};
export const loadCurrentTime = () => {
    retrieveData('last_restart');
    return {
        type: CURRENT_TIME,
        payload: currentDate()
    };
};

const currentDate = () => {
    const year = new Date().getFullYear().toString();
    const month = '0' + new Date().getMonth().toString();
    console.log(month);
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

const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log('stored value: ' + value);
            return value;
        }
        console.log('no value in storage');
    } catch (error) {
        throw new Error(error);
    }
};
