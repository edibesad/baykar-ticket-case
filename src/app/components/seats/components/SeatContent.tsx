interface SeatContentProps {
  state: "available" | "selected" | "booked";
}

export const SeatContent = ({ state }: SeatContentProps) => {
  return (
    <div
      className={`border border-gray-300 rounded-md ${generateColor(state)} 
  } w-4 h-6 flex items-center justify-center cursor-pointer`}
    />
  );
};
function generateColor(state: "available" | "selected" | "booked") {
  switch (state) {
    case "available":
      return "";
    case "selected":
      return "bg-[var(--secondary)]";

    case "booked":
      return "bg-[var(--primary)]";
  }
}
