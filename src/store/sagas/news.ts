import { takeLatest, put, call } from 'redux-saga/effects';
import { BASE_URL, SAMPLE_TEXT, API_KEY } from "../../constant";
import { NEWS_REQUEST } from '../actions/types';
import { newsSuccess, newsFailure } from '../actions/news';

function* newsSaga() {
    try {
        const newsJSON: any = yield call(fetch, [`${BASE_URL}/v2/everything?q=${SAMPLE_TEXT}&apiKey=${API_KEY}`]);
        const news = yield call(() => newsJSON.json());
        const newsToSend = news?.articles?.slice(0, 100)?.map((article, index) => ({
            id: index,
            Source: article?.source?.name,
            Author: article?.author,
            Title: article?.title,
            Date: new Date(article?.publishedAt),
            URL: article?.url,
            Image: article?.urlToImage,
            Description: article?.description
        }));

        yield put(newsSuccess(newsToSend));
    }
    catch (error) {
        yield put(newsFailure(error))
    }
}

function* watchData() {
    yield takeLatest(NEWS_REQUEST, newsSaga);
};

export {
    watchData
}