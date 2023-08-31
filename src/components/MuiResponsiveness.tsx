import { Box } from "@mui/material";

const MuiResponsiveness = () => {
    return (
        <Box
            sx={{
                height: "300px",
                width: {
                    xs: 200, // 0 px and above
                    sm: 300, // 600 px and above
                    md: 400, // 900 px and above
                    lg: 500, // 1200 px and above
                    xl: 600, // 1536 px and above
                },
                bgcolor: "primary.main",
            }}
        >
            MuiResponsiveness
        </Box>
    );
};

export default MuiResponsiveness;