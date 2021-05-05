import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
    key: 'root',
    storage: storage,
    debug: true
}

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(sagaMiddleware));
const initialState = {};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, initialState, enhancer);
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };