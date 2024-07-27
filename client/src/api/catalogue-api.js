import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/items';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const items = Object.values(result);

    return items;
};

export const getOne = (itemId) => request.get(`${BASE_URL}/${itemId}`);

const catalogueAPI = {
    getAll,
    getOne,
};

export default catalogueAPI;