import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, CircularProgress } from "@mui/material";
import { PaginationItem, Pagination } from "@mui/material";
import { getCategories, getCategoriesById } from "../../actions/books";
import { useLocation } from "react-router-dom";
import Books from "./Books";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const CategoryDetails = () => {
  const { books } = useSelector((state) => state);
  const query = useQuery();
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("ini id " + id);
  const page = query.get("page") || 0;
  useEffect(() => {
    dispatch(getCategoriesById(id, page));
  }, [id, page]);

  console.log("ini books: " + books);

  return (
    <Container maxWidth="lg">
      <Typography variant="h5">Nama Category: </Typography>

      {!books.length ? <CircularProgress /> : <Books booksData={books} />}
      {/* <Pagination count={10} size="large" to={`/category/${id}?page=${page}`} /> */}
      <Pagination
        count={10}
        page={Number(page) || 1}
        variant="outlined"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/category/${id}?page=${item.page}&size=10`}
          />
        )}
      />
    </Container>
  );
};

export default CategoryDetails;
