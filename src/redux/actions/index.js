export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavourite = (companyName) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: companyName,
  };
};

export const removeFromFavourite = (companyName) => {
  return {
    type: "REMOVE_FROM_FAVOURITE",
    payload: companyName,
  };
};
