import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Chip, Typography, Grid } from "@mui/material";
import { getCategoriesById } from "../../actions/books";
import BooksCategories from "../BooksCategories";
import useStyles from "./styles";

const Books = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log("books component");

  console.log(books);

  return (
    <div>
      <Typography variant="h5" className={classes.title}>
        Explore Categories
      </Typography>

      <Grid container spacing={2}>
        {books?.map((category) => (
          <Grid item key={category.id}>
            <Chip
              label={category.name}
              onClick={() => navigate(`/category/${category.id}`)}
              variant="outlined"
              className={classes.chip}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" className={classes.title}>
        Bookmarks
      </Typography>
    </div>
  );
};

export default Books;
