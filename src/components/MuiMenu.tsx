import { MouseEvent, useState } from "react";
import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
    AppBar,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";

const MuiMenu = () => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(
        null
    );
    const open = Boolean(anchorElement);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

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
                    <Button
                        color="inherit"
                        id="resources-button"
                        onClick={handleClick}
                        aria-controls={open ? "resource-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        endIcon={<KeyboardArrowDown />}
                    >
                        Resources
                    </Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu
                    id="resources-menu"
                    anchorEl={anchorElement}
                    open={open}
                    MenuListProps={{ "aria-labelledby": "resources-button" }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MuiMenu;