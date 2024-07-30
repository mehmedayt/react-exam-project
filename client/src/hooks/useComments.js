import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const createHandler = ( itemId, comment) =>  commentsAPI.create(itemId, comment);
 
    return createHandler;
}

export function useGetAllComments ( itemId ) {
    const [ commments, setComments ] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(itemId);

            setComments(result);
        })();
    }, [itemId]);

    return [commments, setComments];
}