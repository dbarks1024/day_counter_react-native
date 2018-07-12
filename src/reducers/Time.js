import { CURRENT_TIME, RESTART_TIME } from '../actions/types';

const INITIAL_STATE = {
    time: 1
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_TIME:
            return { ...state,
                time: action.payload
            };
        case RESTART_TIME:
            console.log(action);
            return { ...state,
                time: action.payload
            };
        default:
            return state;
    }
};
