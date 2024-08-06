/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import PopUp from "../ui/popUp/PopUp";
import Spinner from "../ui/spinner/Spinner";

const initialValues = { email: '', password: '', 'confirm-password': ''};


export default function Register(){
  const [error, setError] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [popMessage, setPopMassage] = useState('');

  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if(values.password !== values['confirm-password']){
      setPopMassage('Password missmatch!');
      setShowPopUp(true);
      return;
    }

    if(values.email ==='' || values.password === ''){
      setShowPopUp(true);
    }

    try {
      await register(values.email, values.password);
      navigate('/');
    } catch (err) {
      setShowPopUp(true);
      setPopMassage(err.message);
    }
  };

  const {
    values,
    changeHandler,
    submitHandler,
    spinner
  } = useForm(initialValues, registerHandler);

    return(
        <section id="register-page" className="content auth">
          {spinner && <Spinner/>}
          <form id="register" onSubmit={submitHandler}>
          <div className="container">
            <div className="brand-logo"></div>
            <h1>Register</h1>
    
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="maria@email.com"
            />
    
            <label htmlFor="pass">Password:</label>
            <input
             type="password"
             name="password"
             id="register-password"
             value={values.password}
             onChange={changeHandler}
            />
    
            <label htmlFor="con-pass">Confirm Password:</label>
            <input
             type="password"
             name="confirm-password"
             id="confirm-password"
             value={values['confirm-password']}
             onChange={changeHandler}
            />
    
            {error && (
            <p>
              <span style={{ fontSize: '18px', color: 'red', textAlign: 'center'}}>{error}</span>
            </p>
            )}

            <input className="btn submit" type="submit" value="Register" />
    
            <p className="field">
              <span>If you already have profile click <Link to="/login">here</Link></span>
            </p>
          </div>
        </form>
      {showPopUp && <PopUp isRequired={true} text={popMessage.length > 1 ? popMessage : 'All fields are required!'}/>}

      </section>
    );
}