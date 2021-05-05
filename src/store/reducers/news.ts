import {
  NEWS_SUCCESS,
  NEWS_FAILURE,
  CLEAN_STATE
} from '../actions/types';

const initialState = {
  news: [],
  error: null
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_SUCCESS: {
      return {
        ...state,
        news: action.payload,
        error: null
      };
    }
    case NEWS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case CLEAN_STATE: {
      return {
        news: [],
        error: null
      };
    }
    default:
      return state;
  }
};

export default newsReducer;
