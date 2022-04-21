// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_CATEGORY":
      return action.payload;
    default:
      return posts;
  }
};
