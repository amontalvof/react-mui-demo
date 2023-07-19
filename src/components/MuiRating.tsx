import { ChangeEvent, useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Rating, Stack } from '@mui/material';

const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null);
    console.log(value);

    const handleChange = (event: ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size="large"
            />
            <Rating
                value={value}
                onChange={handleChange}
                icon={<Favorite fontSize="inherit" color="error" />}
                emptyIcon={<FavoriteBorder fontSize="inherit" />}
            />
            <Rating value={value} onChange={handleChange} readOnly />
            <Rating
                value={value}
                onChange={handleChange}
                highlightSelectedOnly
            />
        </Stack>
    );
};

export default MuiRating;
