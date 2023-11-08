import React from 'react';
import { Box, Toolbar, InputAdornment,InputBase, IconButton } from '@mui/material';
import { FaSearch, FaBell } from 'react-icons/fa';
import BellSVG from './../../elements/svg/BellSVG';
export default function Header() {
    return (
        <Box 
            display='flex'
            flexDirection='row-reverse'
            justifyContent='flex-start'
            
        >
            <Toolbar
            color='gray'
            sx={{
                borderRadius: '30px', 
background:' #FFF',
boxShadow:' 14px 17px 40px 4px rgba(87, 221, 167, 0.04)',
                mt:'20px',
                mr:'20px',
            }}
            width='fit-content'>
                <InputBase background='#F6F6F6' placeholder="Search…"
             startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <FaSearch fontSize='11px' />
                  </IconButton>
                </InputAdornment>
              }     inputProps={{ 'aria-label': 'search' }} />
                <IconButton>
                    <FaSearch fontSize='18px' />
                </IconButton>
                <IconButton sx={{
                    position:'relative',
                    '::before':{
                        
                        position:'absolute',
                        fontSize:'8px',
                        textAlign:'center',
                        top:"0",
                        right:'0',
                        content:'"2"',
                        width:'10px',
                        height:'10px',
                        borderRadius:'50%',
                        background:'#F66451',
                        margin:'0 10px',
                        color:"#FFF"
                    }
                }}>
                    <BellSVG />
                </IconButton>
                <img src="/img/person.png"  style={{ borderRadius: '50%', width: '25px' }} alt="Profile" />
            </Toolbar>
        </Box>
    );
}