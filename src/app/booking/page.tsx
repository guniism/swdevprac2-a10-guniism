import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function BookingPage() {
    const session = await getServerSession(authOptions);

    if(!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);

    return (
    <main>
        <h1 className='text-3xl font-bold text-center mt-10 mb-5'>Venue Booking</h1>
        
        <div className="text-2xl text-center">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2 mx-auto">
            <tbody>
                <tr>
                <td>Email</td>
                <td>{profile.data.email}</td>
                </tr>
                <tr>
                <td>Tel.</td>
                <td>{profile.data.tel}</td>
                </tr>
                <tr>
                <td>Member Since</td>
                <td>{createdAt.toString()}</td>
                </tr>
            </tbody>
        </table>

        <form className="flex flex-col max-w-md mx-auto space-y-5 p-5">  
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" placeholder="Enter your name"></TextField>
            <TextField variant="standard" name="Contact-Number" label="Contact-Number" placeholder="Enter contact number"></TextField>
            <Select variant="standard" id="venue" className="h-12">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <DateReserve />

            <button name="Book Venue" type="submit" className="rounded bg-[#055D70] text-white font-medium h-14 hover:bg-[#277381]">Book Venue</button>
        </form>

    </main>
    );
  }