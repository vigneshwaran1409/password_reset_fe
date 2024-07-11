import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Container } from "@mui/material";
import { toast } from "react-toastify";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Home = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    navigate("/signin");
    toast.success("Logout successful", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: lightTheme.palette.background.default,
          color: lightTheme.palette.text.primary,
          padding: "20px",
          textAlign: "center",
          overflowY: "hidden",
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Welcome to Our Website
        </Typography>
        {userData ? (
          <>
            <Typography variant='h5' component='h2' gutterBottom>
              Welcome, {userData?.firstName}!
            </Typography>
            <Typography variant='body1' gutterBottom>
              We're glad to see you again. Feel free to explore our services.
            </Typography>
            <Button variant='contained' color='primary' onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Typography variant='body1' gutterBottom>
              To access our services, please sign in.
            </Typography>
            <Button variant='contained' color='primary' onClick={handleSignIn}>
              Sign In
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;