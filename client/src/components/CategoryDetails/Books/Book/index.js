import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import useStyles from "./styles";

const Book = (props) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardMedia
        component="img"
        src={props.bookDetails.cover_url}
        height="200"
        width="auto"
        className={classes.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.bookDetails.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.bookDetails.authors?.map((author) => author)}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          What's it about?
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {props.bookDetails.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Add to Bookmark</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
