import React, { useState } from "react";
import Book from "./Book";
import { Grid, CircularProgress, TextField, Pagination } from "@mui/material";

const Books = (props) => {
  const booksData = props.booksData;
  const [search, setsearch] = useState("");

  console.log("Books data from Books: ", booksData.books);
  return (
    <div>
      <TextField
        label="Cari Judul Disini"
        id="fullWidth"
        onChange={(event) => {
          setsearch(event.target.value);
        }}
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
                <Book bookDetails={book} />
              </Grid>
            ))
        )}
      </Grid>
    </div>
  );
};

export default Books;
