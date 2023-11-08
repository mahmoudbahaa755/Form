import { FaEye } from "react-icons/fa";
import { Typography, Button } from "@mui/material";

const ActionCell = ({ value, color = "lightGreen" }) => (
  <Typography
    display="flex"
    gap="5px"
    alignItems="center"
    fontSize="13.257px"
    color={color}
  >
    <FaEye /> {value}
  </Typography>
);

export default ActionCell;
