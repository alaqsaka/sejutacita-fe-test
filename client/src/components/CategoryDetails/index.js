import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, CircularProgress } from "@mui/material";
import { getCategories, getCategoriesById } from "../../actions/books";
import Books from "./Books";

const CategoryDetails = () => {
  const { books } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("ini id " + id);

  useEffect(() => {
    dispatch(getCategoriesById(id));
  }, [id]);

  console.log("ini books: " + books);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5">Nama Category: </Typography>
      {!books.length ? <CircularProgress /> : <Books booksData={books} />}
    </Container>
  );
};

export default CategoryDetails;
