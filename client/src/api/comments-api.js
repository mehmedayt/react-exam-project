import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/items';

const buildUrl = (itemId) => `${BASE_URL}/${itemId}/comments`;

const create = async (itemId, username, text) => await requester.post(buildUrl(itemId), { username, text });

const getAll = async  (itemId) =>{

    const result = await requester.get(buildUrl(itemId));
    
    const comments = Object.values(result);

    return comments;
};

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;