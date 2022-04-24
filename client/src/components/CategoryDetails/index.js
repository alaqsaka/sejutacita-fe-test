import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, CircularProgress } from "@mui/material";
import { PaginationItem, Pagination } from "@mui/material";
import { getCategories, getCategoriesById } from "../../actions/books";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";
import Books from "./Books";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const CategoryDetails = () => {
  const classes = useStyles();
  const { books } = useSelector((state) => state);
  const query = useQuery();
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("ini id " + id);
  const page = query.get("page") || 0;
  useEffect(() => {
    dispatch(getCategoriesById(id, page));
  }, [id, page]);

  console.log("books");
  console.log(books);

  let category = books.category;
  //
  if (category) {
    category = category.filter((kategori) => kategori.id == id);
  }

  let currentCategory = category;
  console.log(currentCategory);
  let numOfPages = books.numberOfPages;

  console.log("number page");
  if (numOfPages) {
    console.log(numOfPages);
  }
  return (
    <Container maxWidth="xl">
      <Typography variant="h5" className={classes.title}>
        {!currentCategory ? <CircularProgress /> : `${currentCategory[0].name}`}
      </Typography>

      {!books ? (
        <CircularProgress />
      ) : (
        <div className={classes.booksAndPaginate}>
          <Books booksData={books} />
          <div classes={classes.paginate}>
            <Pagination
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              count={10}
              page={Number(page) || 1}
              variant="outlined"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  classes={{ ul: classes.ul }}
                  component={Link}
                  to={`/category/${id}?page=${item.page}&size=10`}
                />
              )}
            />
          </div>
        </div>
      )}
      {/* <Pagination count={10} size="large" to={`/category/${id}?page=${page}`} /> */}
    </Container>
  );
};

export default CategoryDetails;
