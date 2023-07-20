import { Box } from '@mui/material';

const MuiBox = () => {
    return (
        <>
            <Box
                // component="span"
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    height: '100px',
                    width: '100px',
                    padding: '16px',
                    '&:hover': {
                        backgroundColor: 'primary.light',
                    },
                }}
            >
                MuiBox
            </Box>
            <Box
                display="flex"
                height="100px"
                width="100px"
                bgcolor="success.light"
                p={2}
            >
                MuiBox
            </Box>
        </>
    );
};

export default MuiBox;
