import React from "react";
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

const Book = (props) => {
  const classes = useStyles();

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
        <Button size="medium">Add to Bookmark</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
