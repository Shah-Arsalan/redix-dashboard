import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const BuildingEquipment = () => {
  const equipmentData = [
    {
      heading: "Radix1",
      fields: {
        serial: "12345",
        status: "Online",
        lastAlert: "No Alerts"
      }
    },
    {
      heading: "Radix2",
      fields: {
        serial: "67890",
        status: "Offline",
        lastAlert: "Last Alert: 2h ago"
      }
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "100vw",
        width: 300,
        padding: 2,
        boxShadow: 3,
      }}
    >
      {equipmentData.map((equipment, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
            marginBottom: 2,
            marginTop:8,
            padding: 2,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
            {equipment.heading}
          </Typography>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="body1">
                <strong>Serial:</strong> {equipment.fields.serial}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Status:</strong> {equipment.fields.status}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Last Alert:</strong> {equipment.fields.lastAlert}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default BuildingEquipment;