import { useState } from "react";
import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";

const MuiChip = () => {
    const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

    const handleDelete = (chipToDelete: string) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Chip" size="small" />
            <Chip label="Chip" color="primary" size="medium" icon={<Face />} />
            <Chip label="Chip" color="secondary" size="medium" variant="outlined" avatar={<Avatar>A</Avatar>} />
            <Chip label="Click" color="success" onClick={() => alert("Click")} />
            <Chip label="Delete" color="error" onClick={() => alert("Click")} onDelete={() => alert("Delete")} />
            {chips.map((chip) => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))}
        </Stack>
    );
};

export default MuiChip;