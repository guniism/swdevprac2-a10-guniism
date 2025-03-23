import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";


type BookState={
    bookItems:BookingItem[]
}

const initialState:BookState={bookItems:[]}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
      addBooking: (state, action: PayloadAction<BookingItem>) => {
        const newBooking = action.payload;
        const existingBookingIndex = state.bookItems.findIndex(
          (booking) =>
            (booking.venue === newBooking.venue) && (booking.bookDate === newBooking.bookDate)
        );
      
        if (existingBookingIndex !== -1) {
          state.bookItems[existingBookingIndex] = newBooking;
        } else {
          state.bookItems.push(newBooking);
        }

      },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(obj => 
                !(
                    obj.nameLastname === action.payload.nameLastname &&
                    obj.tel === action.payload.tel &&
                    obj.venue === action.payload.venue &&
                    obj.bookDate === action.payload.bookDate
                )
            );
        },
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
