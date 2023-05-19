import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { Menu as MenuIcon } from "@mui/icons-material/Menu";
import styled from "styled-components";
import { getDataFromApi } from "../../core/api/query";
import { clorChangeAPI } from "../../core/util/main";
import Link from "@mui/material/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { store } from "../../core/redux/store/store";

const Wrapper = styled(AppBar)`
  .tool {
    min-height: 60px;
    background-color: #171718;
    border-bottom: 5px solid rgba(241, 8, 8, 1);
    /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(241,8,8,1) 56%, rgba(0,212,255,1) 100%);; */
  }

  .color {
    height: 0px;
  }

  .menuItem4 {
    /* min-width: 5px; */

    margin-left: 3%;
    /* padding: 5px; */

    /* background-color:aliceblue; */
  }
  .menuItem5 {
    margin-left: 60%;
  }
  .menuItem3 {
    margin-left: auto;
  }
  .item6 {
    margin-left: 3%;
  }
`;

export default function ButtonAppBar() {
  // Todo The purpose of useCallback() and useMemo()

  // console.log(clorChangeAPI(true))
  console.log(
    store.dispatch({
      type: "addItem",
      payloard: {
        discription: "Chicken Fried Rice",
        quantity: 10,
        unitPrice: 450,
      },
    })
  );
  console.log(store.getState());

  // console.log(getDataFromApi())
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="color">
          <Toolbar className="tool">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" className="menuItem1">
              nick's Resturent
            </Typography>
            {/* <Link href="#" underline="none" className='menuItem2'>
                            Menu
                        </Link> */}
            <Typography variant="h6" component="div" className="menuItem4">
              <Link href="#" underline="none" className="menuItem2">
                Food categories
              </Link>
            </Typography>
            <Typography variant="h6" component="div" className="menuItem4">
              <Link href="#" underline="none" className="menuItem2">
                Today specials
              </Link>
            </Typography>
            <div className="menuItem5">
              <Stack spacing={2} direction="row">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Stack>
            </div>
            <Button color="inherit" className="item6">
              Login
            </Button>
          </Toolbar>
          <Toolbar></Toolbar>
        </AppBar>
      </Box>
    </Wrapper>
  );
}
