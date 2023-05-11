import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export default function JobForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    description: "",
    email: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const fetchById = useCallback(() => {
    if (id) {
      fetch(`https://good-teal-seahorse-suit.cyclic.app/jobs/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setValues(res.result));
    }
  }, [id]);
  useEffect(() => {
    fetchById();
  }, [fetchById]);
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://good-teal-seahorse-suit.cyclic.app/jobs", {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        if (!id) {
          navigate(`/jobs/edit/${res.result.insertId}`);
        }
      });
  };
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ background: "#fff", padding: "10px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <Input
              name="name"
              onChange={handleChange}
              value={values.name}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Email</InputLabel>
            <Input
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Description</InputLabel>
            <Input
              multiline
              rows={5}
              name="description"
              onChange={handleChange}
              value={values.description}
            />
          </FormControl>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ marginTop: 1, marginLeft: "auto" }}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
}
