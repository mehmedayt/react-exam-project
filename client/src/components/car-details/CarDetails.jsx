/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneItems } from "../../hooks/useItems";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";
import catalogueAPI from "../../api/catalogue-api";
import PopUp from "../ui/popUp/PopUp";
import Spinner from "../ui/spinner/Spinner";

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
  const [showPopUp, setShowPopUp] = useState(false);
  const [popMessage, setPopMassage] = useState("");

  const { changeHandler, submitHandler, values, spinner } = useForm(
    initialValues,
    async ({ comment }) => {
      try {
        if (comment === "") {
          setShowPopUp(true);
          setPopMassage("You can`t make empty comment!");
          return;
        }
        setShowPopUp(false);
        const newComment = await createComment(itemId, comment);

        // setComments(oldComments => [...oldComments, newComment]);
        dispatch({
          type: "ADD_COMMENT",
          payload: { ...newComment, author: { email } },
        });
      } catch (err) {
        setPopMassage(err.message);
        setShowPopUp(true);
      }
    }
  );

  const itemDeleteHandler = async () => {
    const isConfirmed = confirm(
      `Are you sure you want to delete your ${item.brand} ad?`
    );

    if (!isConfirmed) {
      return;
    }

    try {
      await catalogueAPI.remove(itemId);

      navigate("/");
    } catch (err) {
      setPopMassage(err.message);
      setShowPopUp(true);
    }
  };

  const isOwner = userId === item._ownerId;

  return (
    <section id="game-details">
          {spinner && <Spinner/>}
      <h1>Car Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={item.imageUrl} />
          <h1>{item.brand}</h1>
          <span className="levels">EngineCapacity: {item.engineCapacity}</span>
          <p className="type">{item.model}</p>
        </div>

        <p className="text">{item.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>

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
          {showPopUp && (
            <PopUp
              isRequired={true}
              text={
                popMessage.length > 1 ? popMessage : "All fields are required!"
              }
            />
          )}
        </article>
      )}
    </section>
  );
}
