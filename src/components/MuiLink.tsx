import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
    return (
        <Stack spacing={2} direction="row" m={4}>
            <Link href="#">Link</Link>
            <Link href="#" variant="body2">
                body2
            </Link>
            <Link href="#" color="secondary">
                Secondary
            </Link>
            <Link href="#" underline="hover">
                Hover
            </Link>
            <Typography variant="h6">
                <Link href="#">Wrapped</Link>
            </Typography>
        </Stack>
    );
};

export default MuiLink;