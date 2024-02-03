import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import image from "../images/download.jpg";

const ProjectDetails = () => {
  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        margin: "20px",
      }}
    >
        
      <div style={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ textDecoration: "underline" }}>
          Project Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Academic Title: </strong> 
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Commercial Title: </strong> 
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Project Description: </strong> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
   
    </Paper>
  );
};

export default ProjectDetails;
