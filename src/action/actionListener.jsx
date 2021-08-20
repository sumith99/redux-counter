
import { store } from "../store"

export const incrementListener = () => {
    const gottedState = store.getState().reducerListener;
    return {
        type: "INCREMENT",
        payload: gottedState.counter + 1
    }
}
export const decrementListener = () => {
    const gottedState = store.getState().reducerListener;
    return {
        type: "DECREMENT",
        payload: gottedState.counter - 1
    }
}