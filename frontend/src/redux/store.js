/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const middleware = [
  routerMiddleware(history),
  thunk
];

const bindMiddleware = middleware => {
  if(process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    const { createLogger } = require('redux-logger');
    return composeWithDevTools(
      compose(
        applyMiddleware(...middleware, createLogger({collapsed: true}))
      )
    );
  }
  return applyMiddleware(...middleware);
};

const persistConfig = {
  key: 'root',
  storage,
  // connected-react-router와 persist-react의 공존 : https://qiita.com/shikigamix/items/22dd61afeaec750827e5
  blacklist: ['router'],
}

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

export const store = createStore(
  persistedReducer,
  initialState,
  compose(bindMiddleware(middleware))
);

export const persistor = persistStore(store);
