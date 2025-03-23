"use client"
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { useEffect } from "react";
import { addBooking } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/store";

export default function BookingPage() {
    // const session = getServerSession(authOptions);
    // if(!session || !session.user.token) return null;

    const urlParams = useSearchParams();
    const id = urlParams.get("id");

    const [nameLastname, setNameLastname] = useState<string>("");
    const [tel, setTel] = useState<string>("");
    const [venue, setVenue] = useState<string>("Bloom");
    const [bookingDate, setbookingDate] = useState<Dayjs | null>(null);
    // console.log(bookingDate)
    // useEffect(() => {
    //     console.log("State Updated:", { nameLastname, tel, venue, bookingDate });
    // }, [nameLastname, tel, venue, bookingDate]);

    const dispatch = useDispatch<AppDispatch>();
    const booking = (e: React.FormEvent) => {
        e.preventDefault();
        if(nameLastname && tel && venue && bookingDate){
            const item: BookingItem = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
            }
            // console.log("State Updated:", { nameLastname, tel, venue, bookingDate });
            dispatch(addBooking(item));
            setNameLastname("");
            setTel("");
            setVenue("")
            setbookingDate(null);
        }
    }
    // const s = useAppSelector((state) => state.bookSlice);
    // const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    // console.log('bookSlice:', s); // Log this to check its state
    // console.log('bookItems:', bookItems);

    return (
    <main>
        <h1 className='text-3xl font-bold text-center mt-10 mb-5'>Venue Booking</h1>
        
        {/* <div className="text-2xl text-center">{id}</div> */}

        <form className="flex flex-col max-w-md mx-auto space-y-5 p-5" onSubmit={booking}>  
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" placeholder="Enter your name" value={nameLastname} onChange={(e) => setNameLastname(e.target.value)}></TextField>
            <TextField variant="standard" name="Contact-Number" label="Contact-Number" placeholder="Enter contact number" value={tel} onChange={(e) => setTel(e.target.value)}></TextField>
            <Select variant="standard" id="venue" className="h-12" value={venue} onChange={(e) => setVenue(e.target.value as "Bloom" | "Spark" | "GrandTable")}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <DateReserve onDateChange={
                (value:Dayjs) => {setbookingDate(value); }
            }/>

            <button name="Book Venue" type="submit" className="rounded bg-[#055D70] text-white font-medium h-14 hover:bg-[#277381]">Book Venue</button>
        </form>

    </main>
    );
  }