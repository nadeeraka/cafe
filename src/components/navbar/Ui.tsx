import  React,{ useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Menu as MenuIcon } from "@mui/icons-material/Menu";
import styled from 'styled-components';
import {getDataFromApi} from '../../core/api/query'
import {clorChangeAPI} from '../../core/util/main'


const Wrapper = styled(AppBar)`
.tool{
    min-height: 60px;
    background-color: #171718;
    /* border-bottom:  #f8c90ad8 20px; */
}



.color{
    height: 0px;
}

.menuItem1{
/* min-width: 5px; */
padding: 0;
min-width:10%; 
margin-right: 3%;

/* background-color:aliceblue; */
}
.menuItem4{
/* min-width: 5px; */
 
margin-left: 3%;

/* background-color:aliceblue; */
}
.menuItem2{
/* width: 80%; */
/* margin-right: 2%; */
/* background-color:red; */
}
.menuItem3{
    margin-left: auto;
}
 
`;

export default function ButtonAppBar() {

    // Todo The purpose of useCallback() and useMemo()

    console.log(clorChangeAPI(true))

    // console.log(getDataFromApi())
    return (
        <Wrapper>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className='color'  >
                    <Toolbar className='tool'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" className='menuItem1'>
                            NexMovie
                        </Typography>
                        <Typography variant="h6" component="div"  className='menuItem2'>
                            Upcomming
                        </Typography>
                        <Typography variant="h6" component="div"  className='menuItem4'>
                            Upcomming
                        </Typography>
                        <Button  className='menuItem3' color="inherit">Login</Button>
                    </Toolbar>
                    <Toolbar>

                        
                       
                    </Toolbar>
                </AppBar>
            </Box>
        </Wrapper>
    );
}