import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    height: "250px",
    width: "250px",
    backgroundColor: theme.palette.neutral?.darker,
}));

const MuiResponsiveness = () => {
    return (
        <>
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
                    bgcolor: "secondary.dark",
                }}
            >
                MuiResponsiveness
            </Box>
            <StyledBox />
        </>
    );
};

export default MuiResponsiveness;