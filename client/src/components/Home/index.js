import React, { useEffect, useState } from "react";
import Books from "../books";
import { Container } from "@mui/material";
import { getCategories } from "../../actions/books";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

  return (
    <Container maxWidth="lg">
      <Books />
    </Container>
  );
};

export default Home;
