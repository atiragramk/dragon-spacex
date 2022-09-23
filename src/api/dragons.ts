import { Dragon } from '../types';
import { client } from './client'

export const getAllDragons = async () => {
    try {
        return await client.get<never, Dragon[]>("/dragons");
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getDragon = async (id: string) => {
    try {
        return await client.get<never, Dragon>(`/dragons/${id}`);
    } catch (error) {
        return Promise.reject(error);
    }
}