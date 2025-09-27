import { getAxiosInstance } from '@src/api/axios';
import { TodoService } from '@src/api/services/todoService';
import { createContext } from 'react';
import { config } from '../config';

const axiosInstance = getAxiosInstance(config.backendBaseUrl as string);

type AppContextType = {
    axiosInstance: typeof axiosInstance;
    todoService: TodoService;
};

export const appContextValue = {
    axiosInstance: axiosInstance,
    todoService: new TodoService(axiosInstance),
};

export const AppContext = createContext<AppContextType>(appContextValue);
