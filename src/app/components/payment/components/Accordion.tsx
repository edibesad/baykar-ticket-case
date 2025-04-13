"use client";

import { UserType } from "@/types/UserType";
import React, { useState, useEffect } from "react";

export const Accordion = ({ num, user }: { num: number; user: UserType }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="w-full max-h-96">
      <button
        type="button"
        className="w-full flex justify-between items-center p-3 py-6 font-semibold bg-[var(--primary)]"
        onClick={() => setIsOpened(!isOpened)}
      >
        {`${num}. Yolcu`}
        <span>{isOpened ? "▾" : "▸"}</span>
      </button>

      {isOpened && (
        <div className="p-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name">İsim</label>
            <input
              required
              type="text"
              id="name"
              className="border p-1 w-full"
              {...(user?.name && { defaultValue: user.name })}
              onChange={(e) => {
                user.name = e.target.value;
              }}
            />
          </div>
          <div>
            <label htmlFor="surname">Soyisim</label>
            <input
              required
              type="text"
              id="surname"
              className="border p-1 w-full"
              {...(user?.surname && { defaultValue: user.surname })}
              onChange={(e) => {
                user.surname = e.target.value;
              }}
            />
          </div>
          <div>
            <label htmlFor="phone">Telefon</label>
            <input
              required
              type="tel"
              id="phone"
              className="border p-1 w-full"
              pattern="[0-9]*"
              inputMode="numeric"
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^0-9]/g, "");
              }}
              {...(user?.phone && { defaultValue: user.phone })}
              onChange={(e) => {
                user.phone = e.target.value;
              }}
            />
          </div>
          <div>
            <label htmlFor="email">E-Posta</label>
            <input
              required
              type="email"
              id="email"
              className="border p-1 w-full"
              {...(user?.email && { defaultValue: user.email })}
              onChange={(e) => {
                user.email = e.target.value;
              }}
            />
          </div>
          <div>
            <label htmlFor="gender">Cinsiyet</label>
            <select
              required
              id="gender"
              className="border p-1 w-full"
              {...(user?.email && { defaultValue: user.gender })}
              onChange={(e) => {
                if (
                  !e.target.value ||
                  e.target.value === "male" ||
                  e.target.value === "female"
                ) {
                  user.gender = e.target.value as "female" | "male";
                }
              }}
            >
              <option value="">Seçiniz</option>
              <option value="male">Erkek</option>
              <option value="female">Kadın</option>
            </select>
          </div>
          <div>
            <label htmlFor="birthdate">Doğum Tarihi</label>
            <input
              required
              type="date"
              id="birthdate"
              className="border p-1 w-full"
              {...(user?.birthDate && { defaultValue: user.birthDate })}
              onChange={(e) => {
                user.birthDate = e.target.value;
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
