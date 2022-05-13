const initialState = {
  dataLogin: null,
  token: "",
};

const authReducer = (state = initialState, action) => {
  //action (type, payload)
  switch (action.type) {
    case "SET_DATA_LOGIN":
      return {
        ...state,
        dataLogin: action.payload,
      };
    case "SET_DATA_LOGOUT":
      return {
        dataLogin: null,
      };
    case "SET_TOKEN":
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
