import {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_FAILURE,
  CLEAN_STATE
} from './types';

const getNews = () => ({ type: NEWS_REQUEST });

const newsSuccess = payload => ({ type: NEWS_SUCCESS, payload });

const newsFailure = payload => ({ type: NEWS_FAILURE, payload });

const cleanState = _ => ({ type: CLEAN_STATE });

export {
  getNews,
  newsSuccess,
  newsFailure,
  cleanState
}