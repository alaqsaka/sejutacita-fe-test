import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Divider,
  Grid,
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
        sections: props.bookDetails.sections,
        audio_length: props.bookDetails.audio_length,
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
        <Grid
          container
          alignItems="stretch"
          spacing={2}
          style={{ marginBottom: "15px" }}
        >
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              style={{
                border: "1px solid rgb(43, 70, 166)",
                color: "rgb(43, 70, 166)",
              }}
            >
              🎧 Listen
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Button
              variant="contained"
              size="small"
              fullWidth
              style={{
                backgroundColor: "rgb(43, 70, 166",
              }}
            >
              📖 Read
            </Button>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h6" className={classes.bold}>
          {props.bookDetails.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.author}
        >
          {props.bookDetails.authors?.map((author) => `${author} `)}
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.author}
        >
          {`📄 ${props.bookDetails.sections.length} chapters      ⏰ ${props.bookDetails.audio_length} min `}
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
        <Button
          size="medium"
          onClick={() => addBookmark(props.bookDetails.id)}
          fullWidth
          classesName={classes.bookmark}
          variant="text"
          style={{ color: "#2b46a6", fontWeight: "600" }}
        >
          {props.bookmark.includes(props.bookDetails.id)
            ? "Added to Bookmark"
            : "Add to Bookmark"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
