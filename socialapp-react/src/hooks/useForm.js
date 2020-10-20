import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    // prevents the default action of that event (refreshing the page after the event has been called)
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value}));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;
