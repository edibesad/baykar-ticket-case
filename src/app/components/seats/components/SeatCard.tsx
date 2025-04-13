"use client";

import useStore from "@/store/useSeatStore";
import { UserType } from "@/types/UserType";
import { Tooltip } from "react-tooltip";
import { SeatContent } from "./SeatContent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SeatCard = ({
  user,
  seatNumber,
}: {
  user: UserType | undefined;
  seatNumber: number;
}) => {
  const { selectedSeats, setSelectedSeats } = useStore((state) => state);
  const isSelected = selectedSeats.some(
    (seat) => seat.seatNumber === seatNumber
  );

  const selectSeat = () => {
    if (user && !isSelected) {
      toast.error("Bu koltuk zaten dolu.");
      return;
    }
    if (selectedSeats.length == 3 && !isSelected) {
      toast.error("En fazla 3 koltuk seçebilirsiniz.");
      return;
    }
    if (!isSelected) {
      setSelectedSeats([
        ...selectedSeats,
        { user: {}, seatNumber: seatNumber },
      ]);
    } else {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat.seatNumber !== seatNumber)
      );
    }
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
