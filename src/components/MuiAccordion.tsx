import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import { useState } from "react";

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel1")
                }
            >
                <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem 1 ipsum dolor sit amet consectetur adipisicing elit.
                    Qui quod aliquid vel, est dolor sunt molestiae porro ipsam
                    fuga voluptate dolorem quaerat, error cum ducimus ullam
                    facilis vero sit debitis?
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel2")
                }
            >
                <AccordionSummary
                    id="panel2-header"
                    aria-controls="panel2-content"
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem 2 ipsum dolor sit amet consectetur adipisicing elit.
                    Qui quod aliquid vel, est dolor sunt molestiae porro ipsam
                    fuga voluptate dolorem quaerat, error cum ducimus ullam
                    facilis vero sit debitis?
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={(event, isExpanded) =>
                    handleChange(isExpanded, "panel3")
                }
            >
                <AccordionSummary
                    id="panel3-header"
                    aria-controls="panel3-content"
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.
                    Qui quod aliquid vel, est dolor sunt molestiae porro ipsam
                    fuga voluptate dolorem quaerat, error cum ducimus ullam
                    facilis vero sit debitis?
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default MuiAccordion;