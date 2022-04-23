import React from "react";
import Book from "./Book";
import { Grid, CircularProgress } from "@mui/material";

const Books = (props) => {
  const booksData = props.booksData;

  console.log("Books data from Books: ", booksData);
  return (
    <div>
      <Grid container alignItems="stretch" spacing={3}>
        {!booksData.length ? (
          <CircularProgress />
        ) : (
          booksData.map((book) => (
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