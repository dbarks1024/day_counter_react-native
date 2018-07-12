const INITIAL_STATE = { time: 1 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'restert_time':
        console.log(action);
        return { ...state,
            time: action.payload
        };
        default:
        return state;
    }
};
