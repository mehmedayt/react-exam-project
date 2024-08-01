/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneItems } from "../../hooks/useItems";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";
import catalogueAPI from "../../api/catalogue-api";

const initialValues = {
  comment: "",
};

export default function CarDetails() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [comments, dispatch] = useGetAllComments(itemId);
  const createComment = useCreateComment();
  const { email, userId } = useAuthContext();
  const [item] = useGetOneItems(itemId);
  const { isAuthenticated } = useAuthContext();

  const { changeHandler, submitHandler, values } = useForm(
    initialValues,
    async ({ comment }) => {
      try {
        const newComment = await createComment(itemId, comment);

        // setComments(oldComments => [...oldComments, newComment]);
        dispatch({
          type: "ADD_COMMENT",
          payload: { ...newComment, author: { email } },
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  );

  const itemDeleteHandler = async () => {

    const isConfirmed = confirm(`Are you sure you want to delete your ${item.title} ad?`);

    if(!isConfirmed){
      return;
    }

    try {
      await catalogueAPI.remove(itemId);

      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const isOwner = userId === item._ownerId;

  return (
    <section id="game-details">
      <h1>Car Details</h1>
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
            {comments.map((comment) => (
              <li key={comment._id} className="comment">
                <p>
                  {comment.author.email}: {comment.text}
                </p>
              </li>
            ))}
          </ul>
          {comments.length == 0 && <p className="no-comment">No comments.</p>}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {isOwner && (
          <div className="buttons">
            <Link to={`/items/${itemId}/edit`} className="button">
              Edit
            </Link>
            <a href="#" onClick={itemDeleteHandler} className="button">
              Delete
            </a>
          </div>
        )}
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
