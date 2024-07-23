import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/items';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
};

export const getOne = (itemId) => request.get(`${BASE_URL}/${itemId}`);

const catalogueAPI = {
    getAll,
    getOne,
};

export default catalogueAPI;