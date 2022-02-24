import { createStore } from "redux";

const SAVE = "SAVE_MOVIE_LIST";

const saveMovies = movies => {
    return { type: SAVE, data: movies };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case SAVE:
            return action.data;
        default:
            return state;
    }
};

const store = createStore(reducer);

export { saveMovies };
export default store;