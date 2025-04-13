"use client";

import { useEffect, useRef, useState } from "react";
import useStore from "@/store/useSeatStore";
import useInactivityStore from "@/store/useInactivityStore";

export const InactivityWatcher = () => {
  const { selectedSeats, clearSelectedSeats } = useStore();
  const { lastInteraction, setLastInteraction } = useInactivityStore();
  const [showWarning, setShowWarning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (Object.keys(selectedSeats).length === 0) return;

    const checkInactivity = () => {
      const now = Date.now();
      const diff = now - lastInteraction;

      if (diff >= 30000 && diff < 35000) {
        setShowWarning(true);
      } else if (diff >= 35000) {
        clearSelectedSeats();
        window.location.reload();
      } else {
        console.log(`aktif ${diff} ms`);
      }
    };

    timerRef.current = setInterval(checkInactivity, 1000);

    window.addEventListener("mousemove", setLastInteraction);
    window.addEventListener("keydown", setLastInteraction);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedSeats, lastInteraction, clearSelectedSeats, setLastInteraction]);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">
          İşleme devam etmek istiyor musunuz?
        </h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => {
            setShowWarning(false);
            setLastInteraction();
          }}
        >
          Evet, devam et
        </button>
      </div>
    </div>
  );
};
