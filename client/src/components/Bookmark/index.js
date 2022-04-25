import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Book from "../CategoryDetails/Books/Book";

const Bookmark = () => {
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

  const renderBookInfo = (id) => {
    const bookData = JSON.parse(localStorage.getItem(`bookmark${id}`));

    return (
      <Grid key={bookData.id} item xs={12} sm={12} md={6} lg={3}>
        <Book
          bookDetails={bookData}
          bookmark={bookmark}
          setBookmark={setBookmark}
        />
      </Grid>
    );
  };

  return (
    <div>
      {!bookmark.length ? (
        "No Bookmark added"
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {bookmark?.map((book) => renderBookInfo(book))}
        </Grid>
      )}
    </div>
  );
};

export default Bookmark;
