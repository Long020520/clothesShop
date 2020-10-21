import { createStore, combineReducers, applyMiddleware } from "redux";

import dataReducer from "./reducers/data.reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  dataReducer: dataReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
