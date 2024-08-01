/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneItems } from "../../hooks/useItems";
import catalogueAPI from "../../api/catalogue-api";
import { useMemo } from "react";

export default function CarEdit() {
  const navigate = useNavigate();
  const { itemId } = useParams(); 
  const [ item ] = useGetOneItems(itemId);

  const { 
    changeHandler,
     submitHandler,
      values,
    } = useForm( item, async (values) => {
        await catalogueAPI.update(itemId, values);
        navigate(`/items/${itemId}/details`);

    });
  
  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={submitHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            onChange={changeHandler}
            value={values.title}
            type="text"
            id="title"
            name="title"
          />

          <label htmlFor="category">Category:</label>
          <input
            onChange={changeHandler}
            value={values.category}
            type="text"
            id="category"
            name="category"
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            onChange={changeHandler}
            value={values.maxLevel}
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            onChange={changeHandler}
            value={values.imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            onChange={changeHandler}
            value={values.summary}
            name="summary"
            id="summary"
          ></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}
