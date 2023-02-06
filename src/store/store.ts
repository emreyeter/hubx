
import {  combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';
import { categoryApi } from '../api/category';
import { questionApi } from '../api/question';

const apis = [categoryApi, questionApi];

const middlewares = apis.map(api => api.middleware);

const apiReducer = apis.reduce((acc, api) => {
    // @ts-ignore
    acc[api.reducerPath] = api.reducer;
    return acc;
}, {});


const reducer = combineReducers({
    ...apiReducer
},)

const store = configureStore({
    reducer,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares],
},)

export default store;

export type RootState = ReturnType<typeof store.getState>