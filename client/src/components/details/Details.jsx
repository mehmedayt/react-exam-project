/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/comments-api";
import { useGetOneItems } from "../../hooks/useItems";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";

const initialValues = {
  comment: '',
};

export default function Details() {
  const { itemId } = useParams();
  const [ comments, setComments ] = useGetAllComments(itemId);
  const createComment = useCreateComment();
  const [item] = useGetOneItems(itemId);
  const { isAuthenticated } = useAuthContext();

  const { changeHandler, submitHandler, values 
  } = useForm( initialValues, async ({ comment }) => {
    try {
      const newComment = await createComment(itemId, comment);
      
      setComments(oldComments => [...oldComments, newComment]);
    } catch (err) {
      console.log(err.message);
    }

    }
  );

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={item.imageUrl} />
          <h1>{item.title}</h1>
          <span className="levels">MaxLevel: {item.maxLevel}</span>
          <p className="type">{item.category}</p>
        </div>

        <p className="text">{item.summary}</p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>
          {/* <!-- list all comments for current game (If any) --> */}

          {/* <!-- Display paragraph: If there are no games in the database --> */}

          <ul>
            {comments.map(comment => (
                    <li key={comment._id} className="comment">
                      <p>Username: {comment.text}</p>
                    </li>
                  )) 
                }
          </ul>
                {comments.length == 0 && <p className="no-comment">No comments.</p>}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {/* <div className="buttons">
            <a href="#" className="button">Edit</a>
            <a href="#" className="button">Delete</a>
          </div> */}
      </div>

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}

      {isAuthenticated && (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={submitHandler}>
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={changeHandler}
              value={values.comment}
            ></textarea>

            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
}
