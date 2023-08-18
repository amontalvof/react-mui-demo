import { Mail } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert variant="standard" severity="error">
                This is an error alert
            </Alert>
            <Alert variant="standard" severity="warning">
                This is a warning alert
            </Alert>
            <Alert variant="standard" severity="info">
                This is an info alert
            </Alert>
            <Alert variant="standard" severity="success">
                This is a success alert
            </Alert>

            <Alert variant="outlined" severity="error">
                This is an error alert
            </Alert>
            <Alert variant="outlined" severity="warning">
                This is a warning alert
            </Alert>
            <Alert variant="outlined" severity="info">
                This is an info alert
            </Alert>
            <Alert variant="outlined" severity="success">
                This is a success alert
            </Alert>

            <Alert variant="filled" severity="error" onClose={() => alert("close")}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert variant="filled" severity="warning">
                <AlertTitle>Warning</AlertTitle>
                This is a warning alert
            </Alert>
            <Alert variant="filled" severity="info">
                <AlertTitle>Info</AlertTitle>
                This is an info alert
            </Alert>
            <Alert
                variant="filled"
                severity="success"
                icon={<Mail fontSize="inherit" />}
                action={
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }
            >
                <AlertTitle>Success</AlertTitle>
                This is a success alert
            </Alert>
        </Stack>
    );
};

export default MuiAlert;