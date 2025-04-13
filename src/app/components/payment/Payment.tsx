"use client";

import useStore from "@/store/useSeatStore";
import { Accordion } from "./components/Accordion";
import { useEffect, useState } from "react";
import { Total } from "./components/Total";
import { toast } from "react-toastify";

export const Payment = () => {
  const [hydrated, setHydrated] = useState(false);
  const { selectedSeats, clearSelectedSeats } = useStore((state) => state);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedSeats.length === 0) {
      toast.error("Lütfen en az bir koltuk seçin.");
      return;
    }

    for (let index = 0; index < selectedSeats.length; index++) {
      const seat = selectedSeats[index];

      if (
        !seat.user.birthDate ||
        !seat.user.email ||
        !seat.user.name ||
        !seat.user.surname ||
        !seat.user.phone ||
        !seat.user.surname
      ) {
        toast.error(`Lütfen ${index + 1}. yolcunun bilgilerini doldurun.`);
        return;
      }

      if (seat.user.email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(seat.user.email)) {
          toast.error(
            `Lütfen ${index + 1}. yolcunun geçerli bir e-posta adresi girin.`
          );
          return;
        }
      }
    }

    clearSelectedSeats();
    toast.success("Rezervasyon işlemi başarıyla tamamlandı", {
      autoClose: 500,
      onClose: () => window.location.reload(),
    });
  };

  return (
    <div className="h-full">
      <form action="" onSubmit={handleSubmit}>
        <div className="h-[400px] w-full overflow-y-auto p-4 border0 rounded-md">
          {selectedSeats.map((_, index) => (
            <Accordion
              num={index + 1}
              key={index}
              user={selectedSeats[index].user}
            />
          ))}
        </div>
        <div className="w-full p-12">
          <button
            type="submit"
            className="font-bold h-20 w-full bg-[var(--primary)] cursor-pointer"
          >
            <h1 className="font-bold text-2xl">İşlemleri Tamamla</h1>
          </button>
        </div>
      </form>
      <Total selectedSeats={selectedSeats} />
    </div>
  );
};
