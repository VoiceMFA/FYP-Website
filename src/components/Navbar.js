import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 1.5,
            marginBottom: "20px",
            backgroundColor: "#2196f3", 
            color: "#ffffff", 
        }}
      >
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        <a href={"#"} style={{ textDecoration: "none", color: "inherit" }}> 
          <HomeIcon color="inherit" /> 
          Voice MFA
        </a>
      </Typography>

      <Typography variant="body1" component="div" sx={{ display: "flex", justifyContent: "center" }}>
        <a href={"#poster"} style={{ textDecoration: "none", color: "inherit", marginRight: 10 }}>Poster</a>
        <a href={"#demo"} style={{ textDecoration: "none", color: "inherit", marginRight: 10 }}>Demo</a>
        <a href={"https://github.com/VoiceMFA"} style={{ textDecoration: "none", color: "inherit" }}>GitHub Repo</a>
      </Typography>
    </Paper>
  );
};

export default Header;
