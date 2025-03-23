"use client"

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({onDateChange}: {onDateChange:Function}){
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
    // console.log(bookingDate)
    return(
        // <div className="w-2/4 space-y-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" 
                value={bookingDate}
                onChange={(val)=>{setBookingDate(val); onDateChange(val)}}
                />
            </LocalizationProvider>
        // </div>
    )
}