/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneItems } from "../../hooks/useItems";
import catalogueAPI from "../../api/catalogue-api";
import { useState } from "react";
import PopUp from "../ui/popUp/PopUp";
import Spinner from "../ui/spinner/Spinner";

export default function CarEdit() {
  const navigate = useNavigate();
  const { itemId } = useParams(); 
  const [ item ] = useGetOneItems(itemId);

  const [showPopUp, setShowPopUp] = useState(false);
  const [popMessage, setPopMassage] = useState('');

  const { 
    changeHandler,
     submitHandler,
      values,
      spinner
    } = useForm( item, async (values) => {
      
      if(values.brand === '' ||
        values.model === '' ||
        values.engineCapacity === '' || 
        values.imageUrl === '' || 
        values.summary === ''){
          return setShowPopUp(true);
        }

        try {
          await catalogueAPI.update(itemId, values);
          navigate(`/items/${itemId}/details`);
          
        } catch (err) {
          setPopMassage(err.message);
          setShowPopUp(true);
        }

    });
  
  return (
    <section id="edit-page" className="auth">
          {spinner && <Spinner/>}
          <form id="edit" onSubmit={submitHandler}>
        <div className="container edit-container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-brand">Legendary brand:</label>
          <input
            onChange={changeHandler}
            value={values.brand}
            type="text"
            id="brand"
            name="brand"
          />

          <label htmlFor="model">Model:</label>
          <input
            onChange={changeHandler}
            value={values.model}
            type="text"
            id="model"
            name="model"
          />

          <label htmlFor="levels">EngineCapacity:</label>
          <input
            onChange={changeHandler}
            value={values.engineCapacity}
            type="number"
            id="engineCapacity"
            name="engineCapacity"
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
      {showPopUp && <PopUp isRequired={true} text={popMessage.length > 1 ? popMessage : 'All fields are required!'}/>}
      </section>
  );
}
