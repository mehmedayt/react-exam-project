import { useEffect, useReducer } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const createHandler = ( itemId, comment) =>  commentsAPI.create(itemId, comment);
 
    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT': 
            return [...state, action.payload];
        default:
            return state;
    }
}

export function useGetAllComments ( itemId ) {
    const [ comments, dispatch ] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(itemId);

            dispatch({ type: 'GET_ALL', payload: result });
        })();
    }, [itemId]);

    return [comments, dispatch];
}