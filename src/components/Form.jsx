import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
}));

export default function BasicGrid() {
    //One Variable
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    console.log(formData)
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
    console.log(formData)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                
              />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Button
                variant="contained"
                color="success"
                style={{ width: "60%" }}
                type="submit"
              >
                SUBMIT
              </Button>
            </Item>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}