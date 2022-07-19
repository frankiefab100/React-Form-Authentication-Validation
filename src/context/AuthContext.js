import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../authentication/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextConsumer = () => useContext(AuthContext);

export const UserAuthContextProvider = ({ children }) => {
  // const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (response) => {
      response ? setUser(response) : setUser(null);

      // const unsubscribe = onAuthStateChanged((auth, user) => {
      //   setUser(auth.user, { user });

      //   setError("");
      //   setLoading(false);
      // });
    });
    return unsubscribe;
  }, []);

  const registerUser = (
    firstname,
    lastname,
    email,
    password,
    confirmPassword
  ) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          firstName: firstname,
          lastName: lastname,
          password: password,
          confirmPassword: confirmPassword,
        });
      })
      .then((response) => console.log(response))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    console.log(registerUser);
  };

  const loginUser = (email, password) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.email);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    console.log(loginUser);
  };

  const logOut = () => {
    signOut(auth);

    console.log("Logged out!");
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleAuth = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const facebookAuth = () => {
    const provider = new FacebookAuthProvider();

    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const credential = FacebookAuthProvider.credentialFromError(error);
        alert(errorMessage, credential);
      });
  };

  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    loginUser,
    logOut,
    resetPassword,
    googleAuth,
    facebookAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
