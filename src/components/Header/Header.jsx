import React from 'react';
import { Box, Toolbar, InputAdornment, InputBase, IconButton, Avatar } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import BellSVG from './../../elements/svg/BellSVG';

const toolbarStyles = {
    borderRadius: '30px', 
    background:' #FFF',
    boxShadow:' 14px 17px 40px 4px rgba(87, 221, 167, 0.04)',
    mt:'20px',
    mr:'20px',
};

const bellButtonStyles = {
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
};

export default function Header() {
    return (
        <Box display='flex' flexDirection='row-reverse' justifyContent='flex-start'>
            <Toolbar color='gray' sx={toolbarStyles} width='fit-content'>
                <InputBase background='#F6F6F6' placeholder="Search…"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton>
                                <FaSearch fontSize='11px' />
                            </IconButton>
                        </InputAdornment>
                    }
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton>
                    <FaSearch fontSize='18px' />
                </IconButton>
                <IconButton sx={bellButtonStyles}>
                    <BellSVG />
                </IconButton>
                <Avatar src="/img/person.png" sx={{ width: 25, height: 25 }} />
            </Toolbar>
        </Box>
    );
}