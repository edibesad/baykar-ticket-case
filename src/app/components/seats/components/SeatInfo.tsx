import { SeatContent } from "./SeatContent";

export const SeatInfo = () => {
  return (
    <div className="flex gap-6 text-xl font-bold">
      <div className="flex flex-col justify-center items-center">
        <SeatContent state="booked" />
        <span>Dolu</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <SeatContent state="selected" />
        <span>Seçili</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <SeatContent state="available" />
        <span>Boş</span>
      </div>
    </div>
  );
};
