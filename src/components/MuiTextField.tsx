import { Stack, TextField, InputAdornment } from '@mui/material';

const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Small secondary"
                    size="small"
                    color="secondary"
                />
                <TextField
                    label="Medium primary"
                    size="medium"
                    color="primary"
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Required" required />
                <TextField
                    label="Helper text"
                    helperText="Some important text"
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Type text" type="text" />
                <TextField label="Type number" type="number" />
                <TextField label="Disabled" disabled />
                <TextField label="Read only" InputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">Kg</InputAdornment>
                        ),
                    }}
                />
                <TextField label="Error" error />
            </Stack>
        </Stack>
    );
};

export default MuiTextField;
