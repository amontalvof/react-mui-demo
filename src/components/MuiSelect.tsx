import { ChangeEvent, useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
    const [singleCountry, singleSetCountry] = useState<String>('');
    const [multipleCountry, multipleSetCountry] = useState<String[]>([]);
    console.log({ singleCountry, multipleCountry });

    const handleSingleChange = (event: ChangeEvent<HTMLInputElement>) => {
        singleSetCountry(event.target.value);
    };
    const handleMultipleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        multipleSetCountry(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    return (
        <Box width="250px">
            <TextField
                label="Single select"
                select
                value={singleCountry}
                onChange={handleSingleChange}
                fullWidth
                size="small"
                color="secondary"
                helperText="Select a country"
            >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Cuba">Cuba</MenuItem>
            </TextField>
            <br />
            <br />
            <br />
            <TextField
                label="Multi select"
                select
                value={multipleCountry}
                onChange={handleMultipleChange}
                SelectProps={{ multiple: true }}
                fullWidth
            >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Mexico">Mexico</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Cuba">Cuba</MenuItem>
            </TextField>
        </Box>
    );
};

export default MuiSelect;
