import { Button, Box,Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

const StatusSelectCell = ({ defaultValue }) => {
  let backgroundColor = 'rgba(76, 175, 80, 0.1)'; 
  let color = '#4caf50'; // green

  if (defaultValue === "Running") {
    backgroundColor = 'rgba(76, 175, 80, 0.1)';
    color = '#4caf50';
  }
  if (defaultValue === "Will Expire") {
    backgroundColor = 'rgba(255, 152, 0, 0.1)'; 
    color = '#ff9800'; // orange
  }
  if (defaultValue === "Expired") {
    backgroundColor = 'rgba(244, 67, 54, 0.1)'; 
    color = '#f44336'; // red
  }

  return (
    
    <Button

      sx={{
        borderRadius: "22.5px",
        width:'162px',
padding:"0",
        height:'45px',
        backgroundColor: backgroundColor,
        color: color,

        '&:hover': {
          backgroundColor: backgroundColor, 
        },
      }}
      endIcon={<IoIosArrowDown fontSize="20px" />}
      variant="contained"
    >
      <Typography fontSize='12px'>
        {defaultValue}
      </Typography>
    </Button>
 
  );
};

export default StatusSelectCell;