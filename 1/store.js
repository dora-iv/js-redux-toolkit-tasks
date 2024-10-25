import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'TASK_ADD':
            return {
                ...state,
                [action.payload.task.id]: action.payload.task,
            };

        case 'TASK_REMOVE':
            return omit(state, action.payload.id);

        default:
            return state;
    }
};

// Экспортируем функцию, создающую Store
export default (initialState = {}) => createStore(reducer, initialState);

// END
