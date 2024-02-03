import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import image from "../images/download.jpg";

const Footer = () => {
  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        margin: "20px",
        backgroundColor: "#f0f0f0", 
      }}
    >
      <Typography variant="h5" gutterBottom align="center" sx={{ textDecoration: "underline" }}>
        Contact Information
      </Typography>
      <div style={{ maxWidth: "400px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={image}
            alt="Developer"
            style={{ maxWidth: "150px", borderRadius: "50%", marginBottom: "10px" }}
          />
          <Typography variant="body1" gutterBottom>
            <strong>Name:</strong> Marko Glavic
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Student Number:</strong> 20093324
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Email:</strong> markoglavic3@gmail.com
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Footer;
