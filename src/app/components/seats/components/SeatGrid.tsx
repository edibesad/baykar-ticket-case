import { UserType } from "@/types/UserType";
import { SeatCard } from "./SeatCard";

export const SeatGrid = ({ seats }: { seats: UserType[] }) => {
  const totalRow = 20;
  const seatsPerRow = 4;
  const seatsPerSide = 2;
  const seatSplitter = 4;
  function calculateSeatNumber(rowIndex: number, colIndex: number) {
    let seatNumber = rowIndex * seatsPerRow + colIndex;
    if (rowIndex >= seatSplitter) {
      seatNumber -= seatSplitter;
    }
    if (colIndex > seatsPerSide) {
      seatNumber -= 1;
    }

    return seatNumber;
  }

  return (
    <div className="grid grid-cols-6 grid-rows-20">
      {Array.from({ length: totalRow }, (_, rowIndex) => {
        if (rowIndex === seatSplitter) {
          return (
            <div
              key={`empty-${rowIndex}`}
              className="col-span-6 row-span-1"
            ></div>
          );
        }
        return Array.from({ length: seatsPerRow + 1 }, (_, colIndex) => {
          if (colIndex === seatsPerSide) {
            return (
              <div
                key={`empty-${rowIndex}-${colIndex}`}
                className="col-span-2"
              ></div>
            );
          } else {
            const seatNumber = calculateSeatNumber(rowIndex, colIndex);
            return (
              <div
                key={`seat-${rowIndex}-${colIndex}`}
                className="col-span-1 p-[1px]"
              >
                <SeatCard user={seats[seatNumber]} seatNumber={seatNumber} />
              </div>
            );
          }
        });
      })}
    </div>
  );
};
