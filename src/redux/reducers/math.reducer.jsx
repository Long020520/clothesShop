import { DECRE, INCRE } from "../actions/actionTypes";

const initialState = {
  count: 0,
};

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCRE: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    default:
      return state;
  }
};

export default mathReducer;
