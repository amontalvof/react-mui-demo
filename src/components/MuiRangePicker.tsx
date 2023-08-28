import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const MuiRangePicker = () => {
    const [value, setValue] = useState<DateRange<Dayjs>>([dayjs("2022-04-17"), dayjs("2022-04-21")]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker", "DateRangePicker"]}>
                <DemoItem label="Uncontrolled picker" component="DateRangePicker">
                    <DateRangePicker defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]} />
                </DemoItem>
                <DemoItem label="Controlled picker" component="DateRangePicker">
                    <DateRangePicker value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default MuiRangePicker;