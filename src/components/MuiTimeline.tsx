import {

    Timeline,

    TimelineConnector,

    TimelineContent,

    TimelineDot,

    TimelineItem,

    TimelineOppositeContent,

    TimelineSeparator,

} from "@mui/lab";

import { Stack } from "@mui/material";



const MuiTimeline = () => {

    return (

        <>

            <Stack spacing={2} direction="row">

                <Timeline position="alternate">

                    <TimelineItem>

                        <TimelineOppositeContent color="text.secondary">09:30 am</TimelineOppositeContent>

                        <TimelineSeparator>

                            <TimelineDot color="primary" />

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>City A</TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineOppositeContent color="text.secondary">10:30 am</TimelineOppositeContent>

                        <TimelineSeparator>

                            <TimelineDot color="primary" />

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>City B</TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineOppositeContent color="text.secondary">11:30 am</TimelineOppositeContent>

                        <TimelineSeparator>

                            <TimelineDot color="primary" />

                        </TimelineSeparator>

                        <TimelineContent>City C</TimelineContent>

                    </TimelineItem>

                </Timeline>

                <Timeline>

                    <TimelineItem>

                        <TimelineSeparator>

                            <TimelineDot color="secondary" variant="outlined" />

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>City A</TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineSeparator>

                            <TimelineDot color="secondary" variant="outlined" />

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>City B</TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineSeparator>

                            <TimelineDot color="secondary" variant="outlined" />

                        </TimelineSeparator>

                        <TimelineContent>City C</TimelineContent>

                    </TimelineItem>

                </Timeline>

                <Timeline position="left">

                    <TimelineItem>

                        <TimelineSeparator>

                            <TimelineDot />

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>City A</TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineSeparator>

                            <TimelineDot />

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>City B</TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineSeparator>

                            <TimelineDot />

                        </TimelineSeparator>

                        <TimelineContent>City C</TimelineContent>

                    </TimelineItem>

                </Timeline>

            </Stack>

        </>

    );

};



export default MuiTimeline;