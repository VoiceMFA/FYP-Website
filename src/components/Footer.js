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
        flexDirection: "row",
        alignItems: "center",
        padding: "20px",
        margin: "20px",
      }}
      
    >
        
      <div style={{ marginRight: "20px" }}>
        <img
          src={image}
          alt="Developer"
          style={{ maxWidth: "100px", borderRadius: "50%" }}
        />
      </div>
      
      <div style={{ flex: 1 }}>
        
        <Typography variant="body1" gutterBottoma  > 
          Name: Marko Glavic
        </Typography>
        <Typography variant="body1" gutterBottom>
          Student Number: 20093324
        </Typography>
        <Typography variant="body1" gutterBottom >
          Email: markoglavic3@gmail.com
        </Typography>
      </div>
    </Paper>
  );
};

export default Footer;
