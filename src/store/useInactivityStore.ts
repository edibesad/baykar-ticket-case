import { create } from "zustand";

interface InactivityState {
  lastInteraction: number;
  setLastInteraction: () => void;
}

const useInactivityStore = create<InactivityState>((set) => ({
  lastInteraction: Date.now(),
  setLastInteraction: () => set({ lastInteraction: Date.now() }),
}));

export default useInactivityStore;
