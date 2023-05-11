import { Card, Grid, Typography } from "@mui/material";
import "./user-view.css";
import { useEffect, useState } from "react";

export default function UserView() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    const response = await fetch("https://good-teal-seahorse-suit.cyclic.app/jobs", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    setJobs(json.results);
  };
  return (
    <Grid container spacing={2} sx={{ margin: 2 }}>
      {jobs.map((job) => (
        <Grid item xs={12} sm={4} key={job.id}>
          <Card variant="outlined" sx={{ padding: 2 }}>
            <Typography gutterBottom variant="h5" component="div">
              {job.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {job.description}
            </Typography>
            <Typography variant="small" color="text.primary">
              Email: {job.email}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
