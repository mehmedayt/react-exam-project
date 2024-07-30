import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (itemId, text) => requester.post(BASE_URL, { itemId, text });

const getAll = (itemId) => {
    const params = new URLSearchParams({
        where: `itemId="${itemId}"`,
        load: `author=_ownerId:users`,
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
};

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;