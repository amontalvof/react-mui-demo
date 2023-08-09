import { Avatar, AvatarGroup, Stack } from "@mui/material";

const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={1}>
                <Avatar>JD</Avatar>
                <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                <Avatar sx={{ bgcolor: "secondary.light" }}>CK</Avatar>
            </Stack>
            <Stack direction="row" spacing={1}>
                <AvatarGroup max={4}>
                    <Avatar
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="John Doe"
                    />
                    <Avatar
                        src="https://www.w3schools.com/howto/img_avatar2.png"
                        alt="Jane Doe"
                    />
                    <Avatar
                        src="https://www.w3schools.com/w3images/avatar5.png"
                        alt="John Doe"
                    />
                    <Avatar
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        alt="Jane Smith"
                    />
                    <Avatar
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt="Jane Doe"
                    />
                </AvatarGroup>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Avatar sx={{ width: 50, height: 50 }}>JD</Avatar>
                <Avatar variant="rounded" sx={{ width: 50, height: 50 }}>
                    BW
                </Avatar>
                <Avatar variant="square" sx={{ width: 50, height: 50 }}>
                    CK
                </Avatar>
            </Stack>
        </Stack>
    );
};

export default MuiAvatar;