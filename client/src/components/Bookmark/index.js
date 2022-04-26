import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Book from "../CategoryDetails/Books/Book";
import NoBookmarkImg from "../../assets/images/Bibliophile-bro.svg";

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
        <div style={{ textAlign: "center" }}>
          <img
            src={NoBookmarkImg}
            alt="Imagination illustrations by Storyset"
            srcset="Imagination illustrations by Storyset"
            width={300}
          />
          <Typography
            variant="h4"
            style={{ fontWeight: "700", color: "#2B46A6" }}
          >
            Save books for later
          </Typography>
          <Typography
            variant="body1"
            style={{ fontWeight: "500" }}
            color="text.secondary"
          >
            Don’t let the favorite ones fly away! Bookmark Books to easily find
            them again in the future.
          </Typography>
        </div>
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {bookmark?.map((book) => renderBookInfo(book))}
        </Grid>
      )}
    </div>
  );
};

export default Bookmark;
