import { Box, Typography } from '@mui/material';
import { IoIosGlobe } from "react-icons/io";
import WorldSvg from '../../elements/svg/WorldSVG';
export default function FormHeader(){
    return (
      <Box mb={5} sx={{ padding: "0 1rem", width: "100%" }}>
      <Typography variant="h6" fontSize='24px' display='flex' gap='8px' alignItems='center' fontWeight='600' component="div" gutterBottom>
     <WorldSvg/>
    Buy Domain
        </Typography>
        <Typography variant="body2" fontWeight={400} color="text.secondary">
        This information is required in order to reach you in case of problems with your registration
        </Typography>
      </Box>
    );
}