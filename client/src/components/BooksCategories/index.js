import React, { useEffect } from "react";
import { getCategoriesById } from "../../actions/books";
import { useSelector, useDispatch } from "react-redux";

const BooksCategories = (props) => {
  const dispatch = useDispatch();
  console.log(props.id);
  //   const booksByCategory = useSelector((state) => state.categories);
  //   useEffect(() => {
  //     dispatch(getCategoriesById(props.id));
  //   });

  return <div>buku</div>;
};

export default BooksCategories;
