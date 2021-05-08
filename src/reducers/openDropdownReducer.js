export const openDropdownReducer = (state = false, action) => {
    switch(action.type) {
        case 'OPEN_DROPDOWN':
            return action.payload;
        default:
            return state;
    }
};