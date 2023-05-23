import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Wrapper } from "./mainStyled";
import CardComponent from "../card/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Wrapper>
      <Box className="box" sx={{ flexGrow: 1 }}>
        <Grid className="grid1" container spacing={3}>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
        </Grid>
      </Box>

{/*   

second grid 

*/}
      <Box className="box" sx={{ flexGrow: 1 }}>
        <Grid className="grid1" container spacing={3}>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={3}>
            <CardComponent />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}
