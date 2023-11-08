'use client';
import { Box, Drawer, List, ListItem, ListItemIcon } from '@mui/material';
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
  
    // const { data: sharedValue } = useQuery('sharedValue', () => '', {
    //     initialData: '',
    //   });
    // console.log(sharedValue)
    const icons=[HomeSVG, BoxSVG,ActivitySVG,ShoppingSVG,UsersSVG,HelpSVG,NimbusSVG,SettingSVG]
    return (
                < Box 
                sx={{
                    // '& .MuiDrawer-paper': {
                        background: 'linear-gradient(161.12deg, #D11A2A 4.03%, #4427F8 87.26%), linear-gradient(0deg, #F2F2F2, #F2F2F2)',
                        width: '79px',
                        display: 'flex',

                        flexDirection: 'column',
                        alignItems: 'center',
                    
                    // }
                }}>
   <Box display='flex' position='fixed' flexDirection='column'
            alignItems='center'
            height='100vh'
            justifyContent='space-around'
   >

                <List 
                    // display='flex' flexDirection='column'
                    // justifyContent='center'
               >
                    {icons.map((Icon, index) => (
                        <ListItem key={index}>
                          <Icon  /> 
                        </ListItem>
                    ))}
                </List>
                    <LogoutSVG/>
            {/* // </Drawer> */}
            </Box>
        </Box>
    );
}

export default SideNavBar;