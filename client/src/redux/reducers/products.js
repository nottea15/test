export default (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_PRODUCT":
      return { ...state, product: payload };
    case "FETCH_PRODUCT":
      return { ...state, product: payload.product };
    case "DELETE_PRODUCT":
      return { ...state, products: payload };
    case "EDIT_PRODUCT":
      return { ...state, product: payload };
    case "FETCH_COMMENTS":
      return { ...state, comments: payload };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, payload] };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== payload._id
        ),
      };
    default:
      return state;
  }
};
