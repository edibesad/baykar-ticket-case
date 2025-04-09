import { create } from "zustand";

interface SeatStore {
  selectedSeats: number[];
  setSelectedSeats: (seats: number[]) => void;
  clearSelectedSeats: () => void;
}

const useStore = create<SeatStore>((set) => ({
  selectedSeats: [],
  setSelectedSeats: (seats) => set({ selectedSeats: seats }),
  clearSelectedSeats: () => set({ selectedSeats: [] }),
}));

export default useStore;
