import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import useStyles from "./styles";

const Book = (props, bookmark, setBookmark) => {
  const classes = useStyles();

  console.log(bookmark);
  console.log(props);

  const addBookmark = (id) => {
    const isInBookmark = props.bookmark.includes(id);
    console.log(isInBookmark);
    if (isInBookmark) {
      removeFromBookmark(id);
    } else {
      props.setBookmark((prevBookmark) => [...prevBookmark, id]);
      const bookmarkedBook = {
        id: id,
        title: props.bookDetails.title,
        authors: props.bookDetails.authors,
        cover_url: props.bookDetails.cover_url,
        description: props.bookDetails.description,
      };
      localStorage.setItem(`bookmark${id}`, JSON.stringify(bookmarkedBook));
      const { data } = localStorage.getItem(`bookmark${id}`);
      console.log(data);
    }
  };

  const removeFromBookmark = (bookToRemove) => {
    localStorage.removeItem(`bookmark${bookToRemove}`);
    props.setBookmark(props.bookmark.filter((book) => book !== bookToRemove));
    console.log("removing " + bookToRemove);
  };

  return (
    <Card sx={{ width: "100%" }} className={classes.card}>
      <CardMedia
        component="img"
        src={props.bookDetails.cover_url}
        height="200"
        width="auto"
        className={classes.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" className={classes.bold}>
          {props.bookDetails.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.author}
        >
          {props.bookDetails.authors?.map((author) => author)}
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          variant="h6"
          color="text.secondary"
          className={classes.bold}
        >
          What's it about?
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          className={classes.desc}
        >
          {props.bookDetails.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => addBookmark(props.bookDetails.id)}>
          {props.bookmark.includes(props.bookDetails.id)
            ? "Added to Bookmark"
            : "Add to Bookmark"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
