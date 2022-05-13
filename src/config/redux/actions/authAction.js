import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../../firebase/firebaseConfig";

export const LoginGoogle = () => {
  return async (dispatch) => {
    const data = await signInWithPopup(
      authentication,
      new GoogleAuthProvider()
    );
    dispatch({ type: "SET_DATA_LOGIN", payload: data });
    return data;
  };
};

export const LoginEmail = (email, password) => {
  return (dispatch) => {
    dispatch({ type: "SET_DATA_LOGIN", payload: { email, password } });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: "SET_DATA_LOGOUT" });
  };
};

export const setToken = () => {
  const token = sessionStorage.getItem("token");
  return (dispatch) => {
    dispatch({ type: "SET_TOKEN", payload: { token } });
  };
};
