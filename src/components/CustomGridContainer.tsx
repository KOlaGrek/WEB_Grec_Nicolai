import React from 'react';
import {Box, Grid} from "@mui/material";

class CustomGridContainer extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <Box
                sx={{
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 2,
                    minWidth: 300,
                }}
            >
                <Grid container my={6} rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">
                    {children}
                </Grid>
            </Box>
        );
    }
}

export default CustomGridContainer;