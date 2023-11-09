import { Box,  List, ListItem, ListItemIcon } from '@mui/material';
import HomeSVG from '../../elements/svg/HomeSVG';
import BoxSVG from '../../elements/svg/BoxSVG';
import ActivitySVG from '../../elements/svg/ActivitySVG';
import SettingSVG from '../../elements/svg/SettingSVG';
import NimbusSVG from '../../elements/svg/NimbusSVG';
import ShoppingSVG from '../../elements/svg/ShoppingSVG';
import UsersSVG from '../../elements/svg/UsersSVG';
import HelpSVG from '../../elements/svg/HelpSVG';
import LogoutSVG from '../../elements/svg/LogoutSVG';

function SideNavBar() {
    const icons=[HomeSVG, BoxSVG,ActivitySVG,ShoppingSVG,UsersSVG,HelpSVG,NimbusSVG,SettingSVG]
    return (
        <Box 
            sx={{
                background: 'linear-gradient(161.12deg, #D11A2A 4.03%, #4427F8 87.26%), linear-gradient(0deg, #F2F2F2, #F2F2F2)',
                width: '79px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box display='flex' position='fixed' flexDirection='column'
                alignItems='center'
                height='100vh'
                justifyContent='space-around'
            >
                <List>
                    {icons.map((Icon, index) => (
                        <ListItem  key={index} sx={{ cursor: 'pointer' }}>
                            <Icon /> 
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ cursor: 'pointer' }}>

                <LogoutSVG />
                </Box>
            </Box>
        </Box>
    );
}

export default SideNavBar;