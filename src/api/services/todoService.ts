import { AxiosInstance } from 'axios';

export class TodoService {
    axiosInstance: AxiosInstance;
    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async getTodo(id: number) {
        return await (
            await this.axiosInstance.get(`/todos/${id}`)
        ).data;
    }
}
