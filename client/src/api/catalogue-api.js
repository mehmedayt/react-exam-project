import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/items';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const items = Object.values(result);

    return items;
};

export const getOne = (itemId) => request.get(`${BASE_URL}/${itemId}`);

export const create = (itemData) => request.post(`${BASE_URL}`, itemData);

export const remove = (itemId) => request.del(`${BASE_URL}/${itemId}`);

export const update = (itemId, itemData) => request.put(`${BASE_URL}/${itemId}`, itemData);

const catalogueAPI = {
    getAll,
    getOne,
    create,
    remove,
    update
};

export default catalogueAPI;