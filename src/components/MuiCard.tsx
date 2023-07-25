import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.w3schools.com/css/img_5terre.jpg"
                    alt="w3schools image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lorem
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus fugit, ratione minus beatae quis ex unde at,
                        magnam illum molestias porro inventore soluta delectus
                        enim obcaecati accusamus exercitationem. Molestias,
                        porro?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default MuiCard;