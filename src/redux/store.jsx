import { createStore, combineReducers, applyMiddleware } from "redux";

import mathReducer from "./reducers/math.reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  mathReducer: mathReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
