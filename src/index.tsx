import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from '@src/routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from '@src/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContext, appContext } from '@src/context/app';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <AppContext.Provider value={appContext}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </QueryClientProvider>
        </AppContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
