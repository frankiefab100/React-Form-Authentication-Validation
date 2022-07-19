import { useState, useEffect } from "react";

const FormValidation = (callback, validate) => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleFormChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  // const handlePasswordChange = (e) => {
  //   setPasswordValues({
  //     ...passwordValues,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  //TARGET
  // <input
  //   type="email"
  //   name="email"
  //   id="email"
  //   // value={inputValues.email}
  //   // onChange={handleFormChange}
  // />;

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage(validate(inputValues));
    setSuccessMessage(true);
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0 && successMessage) {
      callback();
    }
  });

  const validateForm = (inputValues) => {
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,14}$/;

    if (!inputValues.firstname.trim()) {
      errorMessage.firstname = "First name required";
    }

    if (!inputValues.lastname.trim()) {
      errorMessage.firstname = "Last name required";
    }

    if (!inputValues.email) {
      errorMessage.firstname = "Email address required";
    } else if (!inputValues.email.match(emailRegex)) {
      errorMessage.email = "Enter a valid email address";
    }

    if (!inputValues.password && inputValues.confirmPassword === "") {
      errorMessage.password = "Password required";
    } else if (!inputValues.password.match(passwordRegex)) {
      errorMessage.password =
        "Password should be at least 6 character long and include special charcaters";
    }

    if (!inputValues.confirmPassword) {
      errorMessage.password = "Confirm password required";
    } else if (!inputValues.confirmPassword !== inputValues.password) {
      errorMessage.password = "Enter a matching password";
    }

    return errorMessage;
  };

  return {
    inputValues,
    handleFormChange,
    handleSubmit,
    validateForm,
    errorMessage,
    successMessage,
  };
};

export default FormValidation;
