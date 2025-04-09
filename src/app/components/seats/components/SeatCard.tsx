"use client";

import useStore from "@/store/useSeatStore";
import { UserType } from "@/types/UserType";
import { Tooltip } from "react-tooltip";
import { SeatContent } from "./SeatContent";

export const SeatCard = ({
  user,
  seatNumber,
}: {
  user: UserType | undefined;
  seatNumber: number;
}) => {
  const seatStore = useStore((state) => state.selectedSeats);
  const isSelected = seatStore.includes(seatNumber);

  const selectSeat = () => {
    if (user && !isSelected) {
      alert("Bu koltuk zaten dolu.");
      return;
    }
    if (seatStore.length == 3 && !isSelected) {
      alert("En fazla 3 koltuk seçebilirsiniz.");
      return;
    }
    if (!isSelected) {
      useStore.setState((state) => ({
        selectedSeats: [...state.selectedSeats, seatNumber],
      }));
    } else {
      useStore.setState((state) => ({
        selectedSeats: state.selectedSeats.filter(
          (seat) => seat !== seatNumber
        ),
      }));
    }
    console.log("useStore.selectedSeats", seatStore);
  };

  return (
    <>
      <button
        data-tooltip={user ? user.name : ""}
        data-tooltip-id="tooltip"
        data-tooltip-content={user ? user.name : ""}
        data-tooltip-place="bottom"
        onClick={selectSeat}
      >
        <SeatContent
          state={isSelected ? "selected" : user ? "booked" : "available"}
        />
      </button>
      <Tooltip
        id="tooltip"
        className="bg-gray-800 text-white text-sm rounded-md p-2"
      />
    </>
  );
};
