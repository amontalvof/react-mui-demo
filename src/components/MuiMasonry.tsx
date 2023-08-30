import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Paper, Stack, Typography } from "@mui/material";

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const MuiMasonry = () => {
    return (
        <Stack sx={{ width: 1200, minHeight: 400 }} direction="row" spacing={8}>
            <Masonry columns={4} spacing={1}>
                {heights.map((height, i) => (
                    <Paper
                        key={`paper-${i}`}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height, border: "1px solid" }}
                    >
                        {i + 1}
                    </Paper>
                ))}
            </Masonry>
            <Masonry columns={4} spacing={1}>
                {heights.map((height, i) => (
                    <Paper key={`paper-accordion-${i}`} sx={{ border: "1px solid" }}>
                        <Accordion sx={{ minHeight: height }}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Typography>Accordion {i + 1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>Content</AccordionDetails>
                        </Accordion>
                    </Paper>
                ))}
            </Masonry>
        </Stack>
    );
};

export default MuiMasonry;