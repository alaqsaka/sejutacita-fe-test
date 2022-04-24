import React from "react";
import { AppBar, Typography, Box } from "@mui/material";
import useStyles from "./styles";
import logo from "../../assets/logo/logo-bg-new.webp";

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.navbar} elevation={0}>
        <a href="/">
          <img src={logo} alt="" srcset="" height={44} width={98} />
        </a>
      </AppBar>
    </Box>
  );
};

export default Navbar;
