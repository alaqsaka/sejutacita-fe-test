import React, { useEffect, useState } from "react";
import Books from "../books";
import { getCategories } from "../../actions/books";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

  return <Books />;
};

export default Home;
