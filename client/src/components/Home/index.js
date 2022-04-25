import React, { useEffect, useState } from "react";
import Books from "../books";
import { Container } from "@mui/material";
import { getCategories } from "../../actions/books";
import { useDispatch } from "react-redux";
import Bookmark from "../Bookmark";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

  return (
    <Container maxWidth="xl">
      <Books />
      <Bookmark />
    </Container>
  );
};

export default Home;
