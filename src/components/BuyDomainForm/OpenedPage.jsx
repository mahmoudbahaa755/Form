"use client";
import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import DomainForm from "./DomainForm";
import FormHeader from "./FormHeader";
import DomainDetails from "./DomainDetails";

export default function OpenedPage() {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
   
    setOpen(true);
  }
  const handleClose = () => {
   
    setOpen(false)};
  
  return (
    <Box sx={{ padding: "0 22px 0px 0", width: "100%" }}>
      <Button
        variant="contained"
        sx={{
          borderRadius: "21px",
          textTransform: "none",
          backgroundColor: "#605BFF",
          width:"175px"
        }}
        
        size="medium"
        onClick={handleOpen}
      >
        + Buy Domain
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          border:'0px solid',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width="95%"
          backgroundColor="#fff"
          
          style={{ overflow: "auto",
          
          borderRadius:10, maxHeight: "90vh", padding: "40px 10px 17px 10px" }}
        >
          <FormHeader />
          <Box display="flex" flexDirection="row">
            <DomainForm />
            <DomainDetails />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
