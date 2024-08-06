import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback) {
  const [values, setValues] = useState(initialValues);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  //Add support for checkbox
  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSpinner(true);

    await submitCallback(values);

    setSpinner(false);
    setValues(initialValues);
  };

  return {
    values,
    changeHandler,
    submitHandler,
    spinner
  };
}
