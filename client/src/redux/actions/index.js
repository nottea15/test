import api from "../../apis/api";

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get("/products");

  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};

export const addProduct = (res) => async (dispatch) => {
  const { data } = await api.post("/products", res);

  dispatch({ type: "ADD_PRODUCT", payload: data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await api.get(`/products/${id}`);

  dispatch({ type: "FETCH_PRODUCT", payload: response.data });
};

export const editProduct = (data, id) => async (dispatch) => {
  const response = await api.put(`/products/${id}`, data);

  dispatch({ type: "EDIT_PRODUCT", payload: response.data });
};

export const deleteProduct = (id) => async (dispatch) => {
  const { data } = await api.delete(`/products/${id}`);

  dispatch({ type: "DELETE_PRODUCT", payload: data });
};

export const fetchComments = (id) => async (dispatch) => {
  const { data } = await api.get(`/comments/${id}`);

  dispatch({ type: "FETCH_COMMENTS", payload: data });
};

export const addComment = (comment, productId) => async (dispatch) => {
  const { data } = await api.post(`/comments/${productId}`, {
    description: comment,
    productId: productId,
  });

  dispatch({ type: "ADD_COMMENT", payload: data.newComment });
};

export const deleteComment = (id) => async (dispatch) => {
  const { data } = await api.delete(`/comments/${id}`);
  dispatch({ type: "DELETE_COMMENT", payload: data });
};
