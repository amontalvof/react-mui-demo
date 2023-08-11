import { Mail } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

const MuiList = () => {
    return (
        <Box sx={{ width: "400px", bgcolor: "#ddd" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText
                            primary="List item 1"
                            secondary="secondary text"
                        />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText
                        primary="List item 2"
                        secondary="secondary text"
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <Mail />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText
                        primary="List item 3"
                        secondary="secondary text"
                    />
                </ListItem>
            </List>
        </Box>
    );
};

export default MuiList;