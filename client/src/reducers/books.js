// eslint-disable-next-line import/no-anonymous-default-export
export default (books = [], action) => {
  switch (action.type) {
    case "FETCH_CATEGORY":
      return action.payload;
    case "FETCH_CATEGORY_BY_ID":
      console.log(books);
      return action.payload;
    default:
      return books;
  }
};
