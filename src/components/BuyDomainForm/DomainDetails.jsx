import { Box, Typography } from '@mui/material';
import CheckCircleSVG from '../../elements/svg/CheckCircleSVG';

export default function DomainDetails() {
  return (
    <Box 
      mb={5} 
      fontWeight='500' 
      bgcolor='#F9FAFC' 
      fontSize={18} 
      display='flex' 
      flexDirection='column' 
      rowGap='30px' 
      height='max-content' 
      sx={{ 
        padding: "20px 1rem",
        borderRadius:'10px', 
        width: { xs: '100%', sm: '80%', md: '30%' }
      }}
    >
      <Typography variant="h6" component="div" gutterBottom={true}>
        Domain Details
      </Typography >
      <Box display='flex' justifyContent='space-between' flexWrap='wrap' gap='5px'>
        <Typography variant="body2" fontSize={18} color='#3B3B3B' textTransform='lowercase'>
          Tridmark.net 
        </Typography>
        <Typography variant="body2" fontSize={18} color="#55B76E">
          15.6 USD
        </Typography>
      </Box>
      <Typography display='flex' alignItems='center' fontSize={16} gap='8px' variant="body2">
        <CheckCircleSVG/> Privacy protection is on
      </Typography>
      <Typography display='flex' alignItems='center' fontSize={16} fontWeight={500} color='#000' gap='8px' variant="body2"> 
        <CheckCircleSVG/> Auto-renew is on
      </Typography>
      <Typography variant="body2" fontWeight={400} color="text.secondary">
        This information is required in order to reach you in case of problems with your registration
      </Typography>
    </Box>
  );
}