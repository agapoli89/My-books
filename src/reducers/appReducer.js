import { ADD, DELETE, EDIT } from '../actions/appActions';

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [ ...state, action.payload];
        case EDIT:
            return state.map(currentStateElement => {
                if (currentStateElement.id !== action.payload.id) {
                    return currentStateElement;
                }

                const { author, comment, rate, title } = action.payload;

                return ({
                    author,
                    comment,
                    id: currentStateElement.id,
                    rate,
                    title,
                })
            });
        case DELETE:
            return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
        default:
            console.warn(`Nie mamy akcji typu ${action.type}`);
            return state;
    }
}