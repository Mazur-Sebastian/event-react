import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from 'config/state';
import { AppRouter } from './AppRouter';

export const App: React.SFC<{}> = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
