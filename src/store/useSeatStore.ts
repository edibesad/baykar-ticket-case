import {
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage,
} from "@/helpers/sessionStorageHelper";
import { UserType } from "@/types/UserType";
import { create } from "zustand";

interface SeatStore {
  selectedSeats: SeatStoreData[];
  setSelectedSeats: (seats: SeatStoreData[]) => void;
  clearSelectedSeats: () => void;
}

export interface SeatStoreData {
  user: UserType;
  seatNumber: number;
}

const useStore = create<SeatStore>((set) => {
  const initialSelectedSeats = getFromSessionStorage("selectedSeats") || [];

  return {
    selectedSeats: initialSelectedSeats,
    setSelectedSeats: (seats) => {
      saveToSessionStorage("selectedSeats", seats);
      set({ selectedSeats: seats });
    },
    clearSelectedSeats: () => {
      set({ selectedSeats: [] });
      removeFromSessionStorage("selectedSeats");
    },
  };
});

export default useStore;
