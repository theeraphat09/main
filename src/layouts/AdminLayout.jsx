import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
export default function AdminLayout() {
  return (
    <Grid container component="main">
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item xs>
        <Navbar />
        <Box sx={{ padding: 1.5 }}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}
