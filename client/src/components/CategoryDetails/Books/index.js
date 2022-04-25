import React, { useState, useEffect } from "react";
import Book from "./Book";
import useStyles from "./styles";
import { Grid, CircularProgress, TextField } from "@mui/material";

const Books = (props) => {
  const booksData = props.booksData;
  const classes = useStyles();
  const [search, setsearch] = useState("");

  const bookmarkInitialValue = [];

  const [bookmark, setBookmark] = useState(bookmarkInitialValue);

  useEffect(() => {
    const data = localStorage.getItem("bookmark");
    if (data) {
      setBookmark(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
    // console.log(bookmark);
  }, [bookmark]);

  console.log("Books data from Books: ", booksData.books);
  return (
    <div>
      <TextField
        label="Cari Judul Disini"
        id="fullWidth"
        onChange={(event) => {
          setsearch(event.target.value);
        }}
        className={classes.search}
      />
      <Grid container alignItems="stretch" spacing={3}>
        {!booksData.books ? (
          <CircularProgress />
        ) : (
          booksData.books
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((book) => (
              <Grid key={book.id} item xs={12} sm={12} md={6} lg={3}>
                <Book
                  bookDetails={book}
                  bookmark={bookmark}
                  setBookmark={setBookmark}
                />
              </Grid>
            ))
        )}
      </Grid>
    </div>
  );
};

export default Books;
