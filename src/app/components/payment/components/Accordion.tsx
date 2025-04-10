"use client";

import React, { useState } from "react";

export const Accordion = ({ num }: { num: number }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // ilk yolcu açık başlasın

  return (
    <div className="min-w-xl max-w-xl mx-auto">
      <div className="border border-gray-300">
        <button
          className="w-full flex justify-between items-center bg-gray-300 p-3 py-6 font-semibold"
          onClick={() => setIsOpened(!isOpened)}
        >
          {`${num}. Yolcu`}
          <span>{isOpened ? "▾" : "▸"}</span>
        </button>

        {isOpened && (
          <div className="p-4 grid grid-cols-2 gap-4">
            <div>
              <label>İsim</label>
              <input className="border p-1 w-full" />
            </div>
            <div>
              <label>Soyisim</label>
              <input className="border p-1 w-full" />
            </div>
            <div>
              <label>Telefon</label>
              <input className="border p-1 w-full" />
            </div>
            <div>
              <label>E-Posta</label>
              <input className="border p-1 w-full" />
            </div>
            <div>
              <label>Cinsiyet</label>
              <input className="border p-1 w-full" />
            </div>
            <div>
              <label>Doğum Tarihi</label>
              <input className="border p-1 w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
