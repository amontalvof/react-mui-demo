import { useEffect, useState } from "react";
import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Box sx={{ width: "250px" }}>
            {loading ? (
                <Skeleton variant="rectangular" width={256} height={144} animation="wave" />
            ) : (
                <img src="https://www.w3schools.com/css/img_5terre.jpg" alt="skeleton" width={256} height={144} />
            )}
            <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
                {loading ? <Skeleton variant="circular" width={40} height={40} animation="wave" /> : <Avatar>A</Avatar>}
                <Stack sx={{ width: "80%" }}>
                    {loading ? (
                        <>
                            <Typography variant="body1">
                                <Skeleton variant="text" width="100%" animation="wave" />
                            </Typography>
                            <Typography variant="body2">
                                <Skeleton variant="text" width="100%" animation="wave" />
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="body1">React Mui Tutorial</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
                        </>
                    )}
                </Stack>
            </Stack>
        </Box>

        // <Stack spacing={1} width="250px">
        //  <Skeleton variant="text" />
        //  <Skeleton variant="circular" width={40} height={40} />
        //  <Skeleton variant="rectangular" width={250} height={125} />

        //  <Skeleton variant="text" animation="wave" />
        //  <Skeleton variant="circular" width={40} height={40} animation="wave" />
        //  <Skeleton variant="rectangular" width={250} height={125} animation="wave" />

        //  <Skeleton variant="text" animation={false} />
        //  <Skeleton variant="circular" width={40} height={40} animation={false} />
        //  <Skeleton variant="rectangular" width={250} height={125} animation={false} />
        // </Stack>
    );
};

export default MuiSkeleton;