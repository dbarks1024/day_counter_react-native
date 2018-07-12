export const timeRestart = ({ prop, value }) => {
    return {
        type: 'time_update',
        payload: { prop, value }
    };
};
