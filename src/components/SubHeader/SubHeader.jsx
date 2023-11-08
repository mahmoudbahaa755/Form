import { Box, Button, Typography, Grid } from "@mui/material";
import OpenedPage from "../BuyDomainForm/OpenedPage";

export default function SubHeader() {
    return (
        <Box sx={{ padding: '0 1rem'}}>
            <Grid container alignItems="center" mt={7} justifyContent="space-between">
                <Grid item={false}>
                    <Typography variant="h7" component="div" gutterBottom>
                        Dashboard/domains
                    </Typography>
                    <Typography fontSize={32} fontWeight={700} gutterBottom>
                        Domains
                    </Typography>
                </Grid>
                <Grid item>
                   
                     <OpenedPage />
                </Grid>
            </Grid>
        </Box>
    );
}