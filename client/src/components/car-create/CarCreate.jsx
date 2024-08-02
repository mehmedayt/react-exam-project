import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateItem } from "../../hooks/useItems";

const initialValues = {
  brand: '',
  model: '',
  engineCapacity: '',
  imageUrl: '',
  summary: '',
};

export default function CarCreate(){
  const navigate = useNavigate();
   const createItem = useCreateItem();

  const createHandler = async (values) => {
    try {
      const {_id: itemId} = await createItem(values);
      navigate(`/items/${itemId}/details`);

    } catch (err) {
      //TODO: set error message and display error 
      console.log(err.message);
    }
  };

  const {
    values,
    changeHandler,
    submitHandler,
  } = useForm(initialValues, createHandler);

    return(
        <section id="create-page" className="auth">
        <form id="create" onSubmit={submitHandler}>
          <div className="container">
            <h1>Create AD</h1>
            <label htmlFor="leg-brand">Car brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={values.brand}
              onChange={changeHandler}
              placeholder="Mercedes"
            />
    
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              value={values.model}
              onChange={changeHandler}
              placeholder="S-class"
            />
    
            <label htmlFor="levels">EngineCapacity:</label>
            <input
              type="number"
              id="engineCapacity"
              name="engineCapacity"
              value={values.engineCapacity}
              onChange={changeHandler}
              min="1"
              placeholder="250"
            />
    
            <label htmlFor="game-img">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              placeholder="http://..."
            />
    
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" placeholder="It`s a..." id="summary" value={values.summary} onChange={changeHandler}></textarea>
            <input className="btn submit" type="submit" value="Create Game" />
          </div>
        </form>
      </section>
    );
}