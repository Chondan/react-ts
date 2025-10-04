import { getAxiosInstance } from '@src/api/axios';
import { createContext } from 'react';
import { config } from '../config';

const axiosInstance = getAxiosInstance(config.backendBaseUrl as string);

type AppContextType = {
    axiosInstance: typeof axiosInstance;
};

export const appContextValue = {
    axiosInstance: axiosInstance,
};

export const AppContext = createContext<AppContextType>(appContextValue);
