import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            My Proparty
          </Typography>
          <Link to={"/Register"} color="inherit">
            <Button variant="contained" >Register</Button>
          </Link>
          <Link to={"/Login"}>
            <Button variant="contained" sx={{marginLeft:"3px"}}>Login</Button>
          </Link>
          <Button variant="contained" sx={{marginLeft:"3px"}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
