const initialState = {
    counter: 0
};
export const reducerListener = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: action.payload };
        case "DECREMENT":
            return { ...state, counter: action.payload };
        default:
            return state
    }
}