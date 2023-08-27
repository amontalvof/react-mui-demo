import { SyntheticEvent, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { Favorite } from '@mui/icons-material';

const MuiTabs = () => {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');

    const handleChange1 = (event: SyntheticEvent, newValue: string) => {
        setValue1(newValue);
    };

    const handleChange2 = (event: SyntheticEvent, newValue: string) => {
        setValue2(newValue);
    };

    return (
        <>
            <Box>
                <TabContext value={value1}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            aria-label="tabs example"
                            onChange={handleChange1}
                            centered
                        >
                            <Tab label="Tab One" value="1" />
                            <Tab label="Tab Two" value="2" />
                            <Tab label="Tab Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Panel One</TabPanel>
                    <TabPanel value="2">Panel Two</TabPanel>
                    <TabPanel value="3">Panel Three</TabPanel>
                </TabContext>
            </Box>
            <Box>
                <TabContext value={value2}>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: 'divider',
                            width: '400px',
                        }}
                    >
                        <TabList
                            aria-label="tabs example"
                            onChange={handleChange2}
                            textColor="secondary"
                            indicatorColor="secondary"
                            variant="scrollable"
                        >
                            <Tab
                                label="Tab One"
                                value="1"
                                icon={<Favorite />}
                                iconPosition="start"
                            />
                            <Tab label="Tab Two" value="2" disabled />
                            <Tab label="Tab Three" value="3" />
                            <Tab label="Tab four" value="4" />
                            <Tab label="Tab five" value="5" />
                            <Tab label="Tab six" value="6" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Panel One</TabPanel>
                    <TabPanel value="2">Panel Two</TabPanel>
                    <TabPanel value="3">Panel Three</TabPanel>
                    <TabPanel value="4">Panel Four</TabPanel>
                    <TabPanel value="5">Panel Five</TabPanel>
                    <TabPanel value="6">Panel Six</TabPanel>
                </TabContext>
            </Box>
        </>
    );
};

export default MuiTabs;
