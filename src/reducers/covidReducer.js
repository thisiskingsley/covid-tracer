export const covidReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COVID':
            return action.payload;
        default:
            return state;
    }
}
