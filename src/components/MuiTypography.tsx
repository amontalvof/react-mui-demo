import { Typography } from '@mui/material';

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">H1 heading</Typography>
            <Typography variant="h2">H2 heading</Typography>
            <Typography variant="h3">H3 heading</Typography>
            <Typography variant="h4">H4 heading</Typography>
            <Typography variant="h4" component="h1">
                H1 heading with h4 styles
            </Typography>
            <Typography variant="h4" gutterBottom>
                H4 heading with dynamic margin bottom
            </Typography>
            <Typography variant="h5">H5 heading</Typography>
            <Typography variant="h6">H6 heading</Typography>

            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>

            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                doloremque accusamus officia quis. Totam voluptatum voluptate
                provident nisi, fuga similique optio mollitia harum quaerat
                accusamus perspiciatis rerum voluptas at quidem!
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis repellendus eius rem, ullam aliquam sunt ut expedita ad
                aliquid animi commodi accusamus optio voluptatibus vero quaerat
                tempore iusto, odio molestiae?
            </Typography>
        </div>
    );
};

export default MuiTypography;
