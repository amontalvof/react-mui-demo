import { useState } from "react";
import { Stack } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

    console.log(
        selectedDate &&
            selectedTime &&
            selectedDateTime && {
                selectedDate: new Date(selectedDate).toLocaleDateString(),
                selectedTime: new Date(selectedTime).toLocaleTimeString(),
                selectedDateTime: new Date(selectedDateTime).toLocaleString(),
            }
    );

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={4} sx={{ width: "250px" }}>
                <DatePicker label="Date Picker" value={selectedDate} onChange={(date) => setSelectedDate(date)} />
                <TimePicker label="Time Picker" value={selectedTime} onChange={(time) => setSelectedTime(time)} />
                <DateTimePicker label="Date Time Picker" value={selectedDateTime} onChange={(dateTime) => setSelectedDateTime(dateTime)} />
            </Stack>
        </LocalizationProvider>
    );
};

export default MuiPicker;
