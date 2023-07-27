import { CatchingPokemon } from "@mui/icons-material";
import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";

const MuiNavbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                >
                    <CatchingPokemon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKE
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default MuiNavbar;