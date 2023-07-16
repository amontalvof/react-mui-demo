import { ChangeEvent, useState } from 'react';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText,
} from '@mui/material';

const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ acceptTnC, skills });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    };

    const handleSkillChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    };

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept the terms and conditions"
                    control={
                        <Checkbox
                            checked={acceptTnC}
                            onChange={handleChange}
                            size="small"
                            color="secondary"
                        />
                    }
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>
            <br />
            <br />
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    value="html"
                                    checked={skills.includes('html')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value="css"
                                    checked={skills.includes('css')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="JAVASCRIPT"
                            control={
                                <Checkbox
                                    value="javascript"
                                    checked={skills.includes('javascript')}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                    </FormGroup>
                    <FormHelperText>
                        You can pick multiple skills
                    </FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
};

export default MuiCheckbox;
