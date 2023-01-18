import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const { logout } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-4frzmp66m1688xfu.us.auth0.com";

      try {
        console.log("Getting");
        const accessToken = await getIdTokenClaims();
        console.log(accessToken.__raw);

        if (isAuthenticated) {
          console.log("Authenticated");
          localStorage.setItem(
            "user",
            JSON.stringify({ ...user, accessToken: accessToken })
          );
          dispatch(
            login({
              user: { ...user, accessToken: accessToken },
            })
          );
          navigate("/dashboard");
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [isAuthenticated]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid item>
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Login or Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
