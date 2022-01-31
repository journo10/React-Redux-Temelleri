import axios from "axios";

export const deleteCard = (id) => {
  return {
    type: "DELETE_CARD",
    id, //id:id şeklinde de olur,unutma...
  };
};

//thunk için
export const fetchUser = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch({ type: "FECTH_USER", payload: data });
    });
  };
};
