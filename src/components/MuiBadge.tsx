import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";

const MuiBadge = () => {
    return (
        <Stack spacing={2} direction="row">
            <Badge badgeContent={5} color="primary">
                <Mail />
            </Badge>
            <Badge badgeContent={0} color="secondary" showZero>
                <Mail />
            </Badge>
            <Badge badgeContent={100} color="primary" showZero>
                <Mail />
            </Badge>
            <Badge badgeContent={100} color="secondary" showZero max={500}>
                <Mail />
            </Badge>
            <Badge variant="dot" color="primary">
                <Mail />
            </Badge>
            <Badge variant="dot" color="primary" invisible>
                <Mail />
            </Badge>
        </Stack>
    );
};

export default MuiBadge;