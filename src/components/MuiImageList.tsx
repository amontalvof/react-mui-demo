import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
} from "@mui/material";

const itemData = [
    {
        img: "https://www.w3schools.com/css/img_5terre.jpg",
        title: "Terre",
    },
    {
        img: "https://www.w3schools.com/css/img_forest.jpg",
        title: "Forest",
    },
    {
        img: "https://www.w3schools.com/css/img_lights.jpg",
        title: "Lights",
    },
    {
        img: "https://www.w3schools.com/css/img_mountains.jpg",
        title: "Mountains",
    },
    {
        img: "https://www.w3schools.com/css/img_5terre.jpg",
        title: "Terre",
    },
    {
        img: "https://www.w3schools.com/css/img_forest.jpg",
        title: "Forest",
    },
    {
        img: "https://www.w3schools.com/css/img_lights.jpg",
        title: "Lights",
    },
    {
        img: "https://www.w3schools.com/css/img_mountains.jpg",
        title: "Mountains",
    },
    {
        img: "https://www.w3schools.com/css/img_5terre.jpg",
        title: "Terre",
    },
    {
        img: "https://www.w3schools.com/css/img_forest.jpg",
        title: "Forest",
    },
    {
        img: "https://www.w3schools.com/css/img_lights.jpg",
        title: "Lights",
    },
    {
        img: "https://www.w3schools.com/css/img_mountains.jpg",
        title: "Mountains",
    },
    {
        img: "https://www.w3schools.com/css/img_5terre.jpg",
        title: "Terre",
    },
    {
        img: "https://www.w3schools.com/css/img_forest.jpg",
        title: "Forest",
    },
    {
        img: "https://www.w3schools.com/css/img_lights.jpg",
        title: "Lights",
    },
    {
        img: "https://www.w3schools.com/css/img_mountains.jpg",
        title: "Mountains",
    },
    {
        img: "https://www.w3schools.com/css/img_5terre.jpg",
        title: "Terre",
    },
    {
        img: "https://www.w3schools.com/css/img_forest.jpg",
        title: "Forest",
    },
    {
        img: "https://www.w3schools.com/css/img_lights.jpg",
        title: "Lights",
    },
    {
        img: "https://www.w3schools.com/css/img_mountains.jpg",
        title: "Mountains",
    },
    {
        img: "https://www.w3schools.com/css/img_5terre.jpg",
        title: "Terre",
    },
    {
        img: "https://www.w3schools.com/css/img_forest.jpg",
        title: "Forest",
    },
    {
        img: "https://www.w3schools.com/css/img_lights.jpg",
        title: "Lights",
    },
    {
        img: "https://www.w3schools.com/css/img_mountains.jpg",
        title: "Mountains",
    },
];

const MuiImageList = () => {
    return (
        <Stack spacing={4}>
            <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                rowHeight={164}
            >
                {itemData.map((item, index) => (
                    <ImageListItem key={`${item.img}-${index}-1`}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar title={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList
                variant="woven"
                sx={{ width: 500, height: 450 }}
                cols={3}
                gap={8}
            >
                {itemData.map((item, index) => (
                    <ImageListItem key={`${item.img}-${index}-2`}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={`${item.img}-${index}-3`}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Stack>
    );
};

export default MuiImageList;