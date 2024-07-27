/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import catalogueAPI from "../../api/catalogue-api";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/comments-api";

export default function Details(){

    const [item, setItem] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { itemId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await catalogueAPI.getOne(itemId);
            
            setItem(result);
        })(); 

    }, []);

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(itemId, username, comment);

        //TODO: this should be refactored
        setItem(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            } 
        }));

        setUsername('');
        setComment('');
    };

    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={item.imageUrl} />
            <h1>{item.title}</h1>
            <span className="levels">MaxLevel: {item.maxLevel}</span>
            <p className="type">{item.category}</p>
          </div>
    
          <p className="text">
           {item.summary}
          </p>
    
          {/* <!-- Bonus ( for Guests and Users ) --> */}
          <div className="details-comments">
            <h2>Comments:</h2>
              {/* <!-- list all comments for current game (If any) --> */}


            {/* <!-- Display paragraph: If there are no games in the database --> */}
            
            <ul>
            {Object.keys(item.comments || {}).length > 0
                ? Object.values(item.comments).map(comment => (
                    <li key={comment._id} className="comment">
                      <p>{comment.username}: {comment.text}</p>
                    </li>
                  )) 
                  : <p className="no-comment">No comments.</p>
                }
            
            </ul>
          </div>
    
          {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
          {/* <div className="buttons">
            <a href="#" className="button">Edit</a>
            <a href="#" className="button">Delete</a>
          </div> */}
        </div>
    
        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={commentSubmitHandler}>
            <input
             type="text"
             placeholder="John Smith"
             name="username"
             onChange={(e) => setUsername(e.target.value)}
             value={username}
             />

            <textarea
             name="comment"
             placeholder="Comment......"
             onChange={(e) => setComment(e.target.value)}
             value={comment}
             ></textarea>

            <input
             className="btn submit"
             type="submit"
             value="Add Comment"
             />

          </form>
        </article>
      </section>
    );
}