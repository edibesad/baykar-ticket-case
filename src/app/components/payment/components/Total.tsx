import { SeatStoreData } from "@/store/useSeatStore";

export const Total = ({
  selectedSeats,
}: {
  selectedSeats: SeatStoreData[];
}) => {
  return (
    <div className="flex justify-between items-center bg-[var(--primary)] h-48 p-12">
      <div className="flex items-center">
        {selectedSeats.map((seat, index) => (
          <div
            key={index}
            className="w-5 h-10 bg-[var(--secondary)] rounded-sm flex items-center justify-center font-bold mr-2 border"
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center text-center font-bold text-2xl">
        <div className="flex items-center justify-center gap-2">
          {selectedSeats.length}x
          <div>
            <div className="w-5 h-10 bg-[var(--secondary)] rounded-sm flex items-center justify-center font-bold mr-2 border"></div>
          </div>
        </div>
        {selectedSeats.length * 1000} TL
      </div>
    </div>
  );
};
