export const timeRestart = ({ prop, value }) => {
    return {
        type: 'time_restart',
        payload: { prop, value }
    };
};
