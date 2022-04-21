import React from "react";
import { useSelector } from "react-redux";

const Books = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  return <div>Books</div>;
};

export default Books;
