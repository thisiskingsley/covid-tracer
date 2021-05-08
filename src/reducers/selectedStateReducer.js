export const selectedStateReducer = (state = "Select A State", action) => {
    switch(action.type){
        case 'SELECTED_STATE':
            return action.payload;
        default:
            return state
    }
}