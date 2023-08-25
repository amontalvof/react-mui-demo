import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

const MuiLoadingButton = () => {
    return (
        <Stack spacing={2} direction="row">
            <LoadingButton variant="outlined" loading={false}>
                Submit
            </LoadingButton>
            <LoadingButton variant="outlined" loading={true}>
                Submit
            </LoadingButton>
            <LoadingButton variant="outlined" loading={false} loadingIndicator="Loading...">
                Fetch Data
            </LoadingButton>
            <LoadingButton variant="outlined" loading={true} loadingIndicator="Loading...">
                Fetch Data
            </LoadingButton>
            <LoadingButton variant="outlined" loading={false} loadingPosition="start" startIcon={<Save />}>
                Save
            </LoadingButton>
            <LoadingButton variant="outlined" loading={true} loadingPosition="start" startIcon={<Save />}>
                Save
            </LoadingButton>
        </Stack>
    );
};

export default MuiLoadingButton;