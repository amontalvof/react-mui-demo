import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';

const MuiButton = () => {
    // const [formats, setFormats] = useState<string[]>([]); // this is without exclusive
    const [formats, setFormats] = useState<string | null>(null); // this is with exclusive

    console.log({ formats });

    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        // updatedFormats: string[] // this is without exclusive
        updatedFormats: string | null
    ) => {
        setFormats(updatedFormats);
    };

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button
                    variant="text"
                    color="primary"
                    href="https://google.com"
                >
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="error">
                    Error
                </Button>
                <Button variant="text" color="warning">
                    Warning
                </Button>
                <Button variant="text" color="info">
                    Info
                </Button>
                <Button variant="text" color="success">
                    Success
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="error">
                    Error
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                <Button variant="outlined" color="warning">
                    Warning
                </Button>
                <Button variant="outlined" color="info">
                    Info
                </Button>
                <Button variant="outlined" color="success">
                    Success
                </Button>
            </Stack>
            <Stack spacing={2} direction="row" display="block">
                <Button variant="contained" color="primary" size="small">
                    Small
                </Button>
                <Button variant="contained" color="primary" size="medium">
                    Medium
                </Button>
                <Button variant="contained" color="primary" size="large">
                    Large
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    disableRipple
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    disableElevation
                >
                    Send
                </Button>
                <IconButton aria-label="send" color="primary" size="large">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction="row">
                <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="horizontal button group"
                >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ButtonGroup
                    variant="outlined"
                    orientation="vertical"
                    size="small"
                    color="secondary"
                    aria-label="vertical button group"
                >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label="text-formatting"
                    value={formats}
                    onChange={handleFormatChange}
                    size="small"
                    color="success"
                    orientation="horizontal"
                    exclusive
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default MuiButton;
