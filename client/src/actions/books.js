import * as api from "../api";

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategory();

    console.log(data);

    dispatch({ type: "FETCH_CATEGORY", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCategoriesById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCategoryById(id);
    console.log("actions: " + data);

    dispatch({ type: "FETCH_CATEGORY_BY_ID", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
