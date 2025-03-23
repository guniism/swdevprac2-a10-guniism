"use client";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
    const venueItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#055D70]">Booking List</h2>

            {venueItems.length === 0 ? (
                <p className="text-center text-gray-500">No Venue Booking</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {venueItems.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-5">
                            <h3 className="text-lg font-semibold text-[#055D70]">{item.venue}</h3>
                            <p className="text-gray-700">
                                <strong>Name:</strong> {item.nameLastname}
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> {item.tel}
                            </p>
                            <p className="text-gray-700">
                                <strong>Date:</strong> {item.bookDate}
                            </p>
                            <button
                                onClick={() => dispatch(removeBooking(item))}
                                className="mt-4 w-full bg-[#055D70] text-white font-medium py-2 rounded-lg hover:bg-[#277381] transition duration-300"
                            >
                                Remove Booking
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
